import RightHeaderPanel from "./HeaderPanel/RightHeaderPanel";
import "./HeaderPanel.scss";
import { useState } from "react";
import MobileNav from "./MobileNav";

const HeaderPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);

    if (isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <header className="header container">
      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <nav className="left-nav">
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
      {/* 3 Bar Line Button */}
      <button className="mobile__nav_btn" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <RightHeaderPanel />
    </header>
  );
};

export default HeaderPanel;
