import "./MobileNav.scss";

const MobileNav = (props) => {
  return (
    <nav className={`mobile-nav ${props.isOpen ? "is-open" : ""} `}>
      <ul>
        <li>
          <a href="#about" onClick={props.toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={props.toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={props.toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
