import singature from '../../assets/signature (2).png';

const Header = () => {
  return (
    <header>
      <img className="logo-signature" src={singature} />
      <div className="header-buttons">
        <button className="header-button">Skills</button>
        <button className="header-button">Projects</button>
        <button className="header-button">Contact Me</button>
      </div>
    </header>
  );
};

export default Header;
