import { useState, useEffect } from 'react';

const Summary = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={show ? 'summary-container show' : 'summary-container'}>
      <h1>Hi, I'm Ahmed Hossam</h1>
      <p className="job-title">Frontend Developer</p>
      <p className="summary-paragraph">
        I'm a skilled frontend developer, professional in designing and
        developing websites and web applications that look and feel great to
        users. I have a solid understanding of web technologies such as HTML,
        CSS, and JavaScript, and Libraries like ReactJS , and I'm able to create
        responsive layouts that work on all devices.{' '}
        <a href="#projects" className="see-projects">
          See My Projects
        </a>
      </p>
      <div className="summary-links">
        <a
          href="https://github.com/ahmedhosssam"
          className="summary-link github"
        >
          <i class="devicon-github-original"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmedhossamm/"
          className="summary-link linkedin"
        >
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a
          href="mailto:ahmedhosssamps@gmail.com"
          className="summary-link gmail"
        >
          <i class="devicon-google-plain"></i>
        </a>
      </div>
      <div className="summary-buttons">
        <button>
          <a href="#projects">Projects</a>
        </button>
        <button>
          <a href="#contact">Contact Me</a>
        </button>
        <button>
          <a
            href="https://drive.google.com/file/d/1JAwiOdZjGp8lGkH2HnUlIxIU4a7ZdT8V/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Summary;
