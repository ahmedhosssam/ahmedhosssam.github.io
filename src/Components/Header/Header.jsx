import React, { useState, useEffect } from 'react';
import singature from '../../assets/signature (2).png';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 720px
  return (
    <header>
      <img className="logo-signature" src={singature} />
      <div className="header-buttons">
        <a className="header-button" href="#skills">
          Skills
        </a>

        <a className="header-button" href="#projects">
          Projects
        </a>

        <a className="header-button" href="#contact">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
