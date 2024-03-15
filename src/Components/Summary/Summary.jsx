import { useState, useEffect } from 'react';

const Summary = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={show ? 'summary-container show' : 'summary-container'}>
      <h1>Hi, I'm Ahmed Hossam</h1>
      <p className="job-title">Software Developer</p>
      <p className="summary-paragraph">
        test.{' '}
        <a href="#projects" className="see-projects">
          See My Projects
        </a>
      </p>
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
      <div className="summary-buttons">
        <a href="#projects">Projects</a>

        <a href="#contact">Contact Me</a>

        <a
          href="https://drive.google.com/file/d/1KRef7Y6-zCg4LHfI-DZsdC0n8evz0Vkj/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Summary;
