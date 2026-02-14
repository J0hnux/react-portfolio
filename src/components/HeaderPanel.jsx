import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const s = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: "0 2rem",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition:
      "background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease",
  },
  headerScrolled: {
    background: "rgba(8,9,13,0.85)",
    backdropFilter: "blur(18px)",
    borderBottom: "1px solid rgba(242, 237, 228, 0.07)",
  },
  logo: {
    fontFamily: "var(--font-display)",
    fontSize: "1.35rem",
    fontWeight: 800,
    letterSpacing: "0.04em",
    color: "var(--text)",
    textTransform: "uppercase",
  },
  logoAccent: {
    color: "var(--accent)",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "2.5rem",
  },
  navLink: {
    fontFamily: "var(--font-body)",
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    transition: "color 0.2s ease",
    cursor: "pointer",
  },
  resumeBtn: {
    fontFamily: "var(--font-body)",
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--bg)",
    background: "var(--accent)",
    padding: "0.45rem 1.1rem",
    borderRadius: "3px",
    transition: "opacity 0.2s ease, transform 0.2s ease",
    display: "inline-block",
  },
  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "var(--text)",
    cursor: "pointer",
    padding: "0.25rem",
  },
};

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
      <header
        style={{
          ...s.header,
          ...(scrolled ? s.headerScrolled : {}),
        }}
      >
        <a href="#" style={s.logo}>
          CL<span style={s.logoAccent}>.</span>ARK
        </a>

        <nav
          style={{ ...s.nav, "@media(max-width:768px)": { display: "none" } }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                ...s.navLink,
                color: hovered === link ? "var(--text)" : "var(--text-muted)",
              }}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
            >
              {link}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1-q1oczlqwSk-xbfQmXakiI8UsOk-0_sp/view?usp=sharing"
            target="_blank"
            style={s.resumeBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Resume
          </a>
        </nav>

        <button
          onClick={toggleMenu}
          style={s.menuBtn}
          aria-label="Toggle menu"
          className="mobile-menu-trigger"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
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

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-trigger { display: flex !important; }
          }
        `}</style>
      </header>
      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default HeaderPanel;
