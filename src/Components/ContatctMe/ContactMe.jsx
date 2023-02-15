const ContactMe = () => {
  return (
    <div className="contact-me" id="contact">
      <h1>Contact Me </h1>
      <p className="lets-work">Let's work together</p>
      <div className="contact-info">
        <p>+20 101 252 0893</p>
        <p>ahmedhosssam@gmail.com</p>
      </div>

      <div className="summary-links">
        <a
          href="https://github.com/ahmedhosssam"
          className="summary-link github"
        >
          <i className="devicon-github-original"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmedhossamm/"
          className="summary-link linkedin"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a
          href="mailto:ahmedhosssamps@gmail.com"
          className="summary-link gmail"
        >
          <i className="devicon-google-plain"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
