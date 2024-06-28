import "./MobileNav.scss";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <button>X</button>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
