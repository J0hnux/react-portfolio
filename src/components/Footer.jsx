import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer container section">
      <p>Copyright © 2024. All rights are reserved</p>
      <div className="socials__container">
        <a href="https://www.linkedin.com/in/jclark007/" target="_blank">
          <img src="/ButtonIcons/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://github.com/J0hnux" target="_blank">
          <img src="/ButtonIcons/github.svg" alt="visit source on github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
