import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const HeaderPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
    document.body.style.overflow = next ? "hidden" : "auto";
  };

  const navLinks = ["About", "Projects", "Contact"];

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 0 1.25rem;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease;
        }
        .header.scrolled {
          background: rgba(8, 9, 13, 0.9);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(242, 237, 228, 0.07);
        }
        .header-logo {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--text);
          text-transform: uppercase;
          text-decoration: none;
          /* Large tap target */
          padding: 0.5rem 0;
          display: inline-block;
        }
        .header-logo span { color: var(--accent); }

        /* Desktop nav — hidden on mobile by default (mobile-first) */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2.5rem;
        }
        .desktop-nav-link {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          transition: color 0.2s ease;
          text-decoration: none;
          padding: 0.5rem 0;
        }
        .desktop-nav-link:hover { color: var(--text); }
        .resume-btn {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bg);
          background: var(--accent);
          padding: 0.5rem 1.1rem;
          border-radius: 3px;
          transition: opacity 0.2s ease, transform 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }
        .resume-btn:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }

        /* Mobile menu button — visible on mobile */
        .menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text);
          cursor: pointer;
          padding: 0.4rem;
          width: 40px;
          height: 40px;
          transition: border-color 0.2s ease, background 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .menu-btn:hover {
          border-color: var(--accent);
          background: var(--accent-dim);
        }

        /* Desktop breakpoint: show nav, hide hamburger */
        @media (min-width: 769px) {
          .header { padding: 0 2rem; height: 70px; }
          .desktop-nav { display: flex; }
          .menu-btn { display: none; }
        }
      `}</style>

      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="header-logo">
          CL<span>.</span>ARK
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="desktop-nav-link"
              style={{
                color: hovered === link ? "var(--text)" : "var(--text-muted)",
              }}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
            >
              {link}
            </a>
          ))}
          {/* <a
            href="https://drive.google.com/file/d/1-q1oczlqwSk-xbfQmXakiI8UsOk-0_sp/view?usp=sharing"
            target="_blank"
            className="resume-btn"
          >
            Resume
          </a> */}
        </nav>

        <button
          onClick={toggleMenu}
          className="menu-btn"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </header>

      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default HeaderPanel;
