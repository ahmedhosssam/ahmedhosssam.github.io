+++
title = 'The Tiger Book: 2 Lexical Analysis'
date = 2025-08-24T12:18:42+03:00
+++

The lexical analyzer (lexer) takes a stream of characters and produces a stream of names, keywords, and punctuation marks; it discards white space and comments between the tokens.

Lexical tokens have types in any programming language, example:
- ID `foo, x, n14`
- NUM `73, 0, 082`
- REAL `3.14, 10., 1e9, 0.5`
- COMMA `,`
- NOTEQ `!=`
- LPAREN `(`
- RPAREN `)`

Punctuation tokens such as `IF`, `VOID` , `RETURN` constructed from alphabetic characters are called **reserved words** and, in most languages, cannot be used as identifiers.

**Preprocessor Directives**: The preprocesser operates on the source character stream, producing another character stream, that new character stream is one that is fed to the lexical analyzer.

It is also possible to integrate macro processing with lexical analysis.

Example of preprocessor directives:
```
#include <stdio.h>
#define NUMS 5 , 6
```

The goal of preprocessor directives is to include files or code, defining macros, or conditional compilation. 

## Regular Expressions

To Implement a lexer you can do it in an ad hoc way, but that can be complicated. A simpler (and also the most common) way is to use **finite automata** and **regular expressions**.

Each token type will have its own regex, and to get the next token in the source code, you basically need to run every DFA (which is the implementation of regex in the lexer) and returns the longest match, why the longest?

Because, image if you have a token such as `if16`, this is an identifier, but it will accept the `IF` DFA. So we need to find the longest match, which will be the identifier match. For `if16` the identifier DFA will reterun 4, and `IF` DFA will return 2, so we will classify the token as an identifier token.

Another Example:
For a token like `ifelse`, when we pass it through the 3 DFAs `IF`, `ELSE`, and identifier, it will result an identifier. Because it's the longest (a token of length 6), not `IF` followed by `ELSE`.

**Note**: Regular expressions are *static* and *declarative*, automata are *dynamic* and *imperative*. That's why regular expressions are usually more convenient to specify the lexical structure of programming-language tokens.

**Rule Priority**: If two or more rules (regexes) match the same longest length, the first regex wins. This means that the order of writing down the regular expression rules has significance.

**Note**: Regexes don't have to be implemented as a DFA, it can be NFA as well, but it will be slower, because it explores multiple possible states at once, which leads to a lot of backtracking, which will take more time.

## Lex

One of the tools that automate the workflow of implementing DFAs for regular expressions is **Lex**.

Lex is a lexical analyzers generator that takes a list of regular expressions (action rules) and generates a fast DFA-based C scanner that matches the longest regex.

**Example of using Lex**:

The regex rules are usually being written in a `lx.l` file (the extension `.l` is used for lex source files, but other people use `.lex` also. Both are valid) , and it looks like this:
```C
// lx.l
%%
"hello world" printf("GOODBYE\n");
dog.*cat printf("A cat and a dog found");
. ;
%%
```

This Lex file has 3 rules:
- `"hello world"` which searches for the string "hello world" and prints "GOODBYE" if it finds it.
- `dog.*cat` is a regex that matches the pattern "dog, then any number of characters, then a cat", and prints "A cat and a dog found" if it finds it.
-  The regex `.` searches for any character and then just ignores it.

**Lex** applys the most important rule that we talked about, which is matching the longest regex. Because here maybe someone would say that if we put `. ;` before `dog.*cat` the lexer would ignore an input like this: `dogxcat` because it matches the first regex. But no, our goal is to find the longest match, and here the longest match is the regex `dog.*cat` because it returns a valid pattern of 7 characters, but `.` returns 7 consecutive valid patterns of length 1.
