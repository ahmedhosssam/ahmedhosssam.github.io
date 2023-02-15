import singature from '../../assets/signature (2).png';

const Header = () => {
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
          Projects
        </a>
      </div>
    </header>
  );
};

export default Header;
