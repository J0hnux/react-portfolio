const MobileNav = ({ isOpen, toggleMenu }) => {
  const links = ["About", "Projects", "Contact"];

  return (
    <>
      <style>{`
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 90;
          background: rgba(8, 9, 13, 0.97);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .mobile-nav-overlay.is-open {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text);
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .mobile-nav-link:hover { color: var(--accent); }
        .mobile-nav-divider {
          width: 1px;
          height: 60px;
          background: var(--border);
        }
        .mobile-resume-btn {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bg);
          background: var(--accent);
          padding: 0.75rem 2rem;
          border-radius: 3px;
          text-decoration: none;
          margin-top: 1rem;
        }
      `}</style>
      <nav className={`mobile-nav-overlay ${isOpen ? "is-open" : ""}`}>
        {links.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="mobile-nav-link"
            onClick={toggleMenu}
          >
            {link}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/1-q1oczlqwSk-xbfQmXakiI8UsOk-0_sp/view?usp=sharing"
          target="_blank"
          className="mobile-resume-btn"
          onClick={toggleMenu}
        >
          Resume ↗
        </a>
      </nav>
    </>
  );
};

export default MobileNav;
