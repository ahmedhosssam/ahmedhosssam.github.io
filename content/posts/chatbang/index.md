+++
title = 'How I Made ChatGPT Run on My Terminal without an API key?'
date = 2025-08-18T21:42:42+03:00
+++

![alt text](/images/ch.png)

I had a problem where I wanted to stop leaving the terminal and going to ChatGPT back and forth just for a quick question. For example: git commands, I always forget most of git commands and I want to ask ChatGPT how can I do something using git. Also to take a suggestion for how to do something using bash (write a bash script to replace every space with a '_' for all the files in that directory). It would be a lot faster if I can do it from the terminal without going to the browser.

And, I also didn't want to do it with an API key (it would've been much easier), one of the reasons is that I cannot afford it in the long term, I'm still a student. So, I decided to hack around to figure out how can I extract the results from ChatGPT's website using web scraping libraries.

Here is the Github repo for `chatbang`: [https://github.com/ahmedhosssam/chatbang](https://github.com/ahmedhosssam/chatbang)

I decided to choose golang. There is no big reason behind that choice, I just wanted to learn the language, and the best way to learn a language/framework is to build a project with it.
I searched for a web scraping library for golang and found out [chromedp](https://github.com/chromedp/chromedp) is one of the popular libraries to control real browser instances (Chromium-based) for automation.

The workflow will be as following:
1. Open a headless browser session.
2. Open chatgpt.com.
3. Wait for the user's prompt.
4. Detect the prompt text area in ChatGPT's DOM tree and "paste" the prompt in it.
5. Detect the submit button and wait for a response.
6. Detect the `copy` button to put the response in the clipboard as markdown.
7. Use Javascript to read the content of the clipboard
8. Render the clipboard content in the terminal

## Headless Browser Sessions

What `chatbang` doing is basically automating what normally people do to access ChatGPT. so it opens a browser session and opens chatgpt.com using a headless session.

A headless session is a browser session designed to be controlled by a programming script, it lives as a process in the memory. It loads all the website's content (HTML, CSS, JS) but it has no GUI to interact with.

The browser engines provides standardized protocols to perform such things. For example Chrome DevTools Protocol (CDP), which provides low-level control over browser operations (control tabs, navigate, click, extract data), and that's what `chromedp` uses under the hood.

So, `chatbang` uses this technique to interact with chatgpt. When you type `chatbang` in the terminal, it opens a headless session in the background, opens chatgpt.com, and waits for the user's prompts in the terminal and execute them one by one.

```go
allocatorCtx, cancel := chromedp.NewExecAllocator(context.Background(),
	append(chromedp.DefaultExecAllocatorOptions[:],
		chromedp.ExecPath(defaultBrowser),
		chromedp.Flag("disable-blink-features", "AutomationControlled"),
		chromedp.Flag("exclude-switches", "enable-automation"),
		chromedp.Flag("disable-extensions", false),
		chromedp.UserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"),
		chromedp.Flag("disable-default-apps", false),
		chromedp.Flag("disable-dev-shm-usage", false),
		chromedp.Flag("disable-gpu", false),
		chromedp.UserDataDir(profileDir),
		chromedp.Flag("profile-directory", "Default"),
	)...,
)
```

This is the code snippet that opens the headless session. Each of these `chromedp.Flag`s controls the chrome's session behavior.

The main purpose of most of these flags is to make it very hard for websites to detect automation. If you take the source code from my github repo and remove these flags, chatgpt will detect the automation and will not open for quite a while, maybe your account will get banned? I don't know. But don't worry, with these flags it's nearly impossible to get into trouble with chatgpt.

`chatbang` uses a new browser profile dedicated for all of that, it creates the new profile in `$HOME/.config/chatbang/profile_data` and uses it. This new profile needs some configuration to make `chatbang` works:

First, you need to log-in to ChatGPT's website. Second, you need to allow the clipboard permission for chatgpt.com to make chatbang copy the content of the page and access the clipboard without asking, if you didn't allow that permission, `chatbang` will get stuck in the terminal because the browser waits for your permission to allow the clipboard access, and there is no GUI to see that.

You can do these steps by executing `chatbang --config`, by default chatbang uses `/usr/bin/google-chrome` as a default browser, if you want to change it to any Chromium-based browser (after executing `chatbang --config`) you can change it from the config file `$HOME/.config/chatbang/chatbang`. Change it to the correct path of your favorite Chromium-based browser.

## Playing with the DOM Tree

After opening chagpt.com in a headless session, now we need to understand the page to start manipulating it.

First, we need to search for the prompt text area to put the prompt in it, and chatgpt's developers make my life easy with this, because the prompt text area has an `id` called `#prompt-textarea` which is quite nice.

```go
err := chromedp.Run(taskCtx,
	chromedp.WaitVisible(`#prompt-textarea`, chromedp.ByID),
	chromedp.Click(`#prompt-textarea`, chromedp.ByID),
	chromedp.SendKeys(`#prompt-textarea`, modifiedPrompt, chromedp.ByID),
	chromedp.Click(`#composer-submit-button`, chromedp.ByID),
	chromedp.Click(`#prompt-textarea`, chromedp.ByID),
)
```
This code snippet searches for an element with the id `#prompt-textarea` and send the prompt to it. And then it searches for the submit button with the id `#composer-submit-button` and click it.

The `modifiedPrompt` variable is the same prompt as the user entered it, but with adding ` (Make an answer in less than 5 lines)`. The reason behind this is that I hate the long responses from ChatGPT. In most cases I just want a one-line response, I don't want a whole article with an introduction and conclusion. Also because I don't want the response to fill the whole terminal window, I opened chatbang to answer something and then I close it to continue my life. I don't want the response to distract me from the context of the terminal, if that makes sense.

Anyways, aftet clicking the submit button we just wait for a response. Here I basically run an infinite for loop (because golang doesn't have a built-in while loop, you need to type `for {...}` to get the same behavior) that waits for the last copy button in the page to appear, which will appear after chatgpt completes the full response. The reason behind this is that chatgpt's page has a lot copy buttons, and all of them are the same button with the same attributes, so we need to wait for the last button to appear and then click it.

Sometimes (which is kind of rare) it chooses to click on the copy button of the last prompt, so you see your prompt as a result in the terminal, but that happens very rarely.

Now, the result is in the clipboard, so we need to access it. I do that using a single Javascript line:

```javascript
new Promise((resolve, reject) => { window.navigator.clipboard.readText() .then(text => resolve(text)) .catch(err => reject(err)); });
```
That line reads text from the clipboard using `navigator.clipboard.readText()`.

And ChatGPT's website does a great thing, it gives you the response as markdown, which is a great opportunity to make the response quite beautiful in the terminal, not just plain text. And that idea was a suggestion from one of my friends, huge thanks to him.

And that's it! Now we have the response as a markdown format. We need to render it in the terminal. I use [go-term-markdown](https://github.com/MichaelMure/go-term-markdown) for that. It's a markdown rendering library written in Go, and it's super easy to use.

Everything else is just a loop to perform all these steps for every prompt.

Finally, one challenge remains is when chatgpt.com decides to change the code of the page. For example if they decides to change the names of the `id`s and classnames, the whole program will break. We will need to make a new release for every change. I haven't figured out yet if there is a long term solution for something like that, but we will see.
