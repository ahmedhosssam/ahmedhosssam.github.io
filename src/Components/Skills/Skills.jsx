import { useState, useEffect } from 'react';

const Skills = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div id="skills" className={show ? 'skills show' : 'skills'}>
      <h1>TECHNICAL SKILLS</h1>
      <div className="skills-container">
        <div className="skills-list">
          <p>
            ⚡ Strong proficiency in JavaScript, object model, DOM manipulation
            and event handlers, data structures, algorithms, JSX, and Babel
          </p>
          <p>
            ⚡ + 1 Year Of Building Professional & Maintainable Websites with
            React JS , Javascript , CSS, SASS , HTML
          </p>
          <p>
            ⚡ Ability to interact with UX, designers and server-side developers
          </p>
          <p>
            ⚡ Proficient Knowledge of OOP ( Classes & Constructors ) , SOLID
            and Design Patterns
          </p>
          <p>
            ⚡ Proficient Knowledge of Version Control Systems ( Git & Github )
          </p>
          <p>⚡ Proficient Knowledge of Testing Libraries such as Jest</p>
          <p>⚡ Ability To Deal With & Consume RestAPIs</p>
          <p>
            ⚡ Fundamental Knowledge of Backend Development With : NodeJS ,
            ExpressJS , MongoDB
          </p>
        </div>
        <div className="skills-icons">
          <p>
            <i class="devicon-javascript-plain"></i>Javscript
          </p>

          <p>
            <i class="devicon-html5-plain"></i>HTML5
          </p>

          <p>
            <i class="devicon-css3-plain"></i>CSS3
          </p>

          <p>
            <i class="devicon-sass-original"></i>Sass
          </p>

          <p>
            <i class="devicon-react-original"></i>ReactJS
          </p>

          <p>
            <i class="devicon-firebase-plain"></i>Firebase
          </p>

          <p>
            <i class="devicon-nodejs-plain-wordmark"></i>NodeJS
          </p>

          <p>
            <i class="devicon-webpack-plain"></i>Webpack
          </p>

          <p>
            <i class="devicon-npm-original-wordmark"></i>npm
          </p>

          <p>
            <i class="devicon-git-plain"></i>Git
          </p>

          <p>
            <i class="devicon-github-original"></i>Github
          </p>

          <p>
            <i class="devicon-linux-plain"></i>Linux
          </p>

          <p>
            <i class="devicon-ubuntu-plain"></i>Ubuntu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
