const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: 2.5rem 2rem;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text);
          text-decoration: none;
        }
        .footer-logo span { color: var(--accent); }
        .footer-copy {
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.03em;
        }
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid var(--border);
          border-radius: 50%;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .footer-social-link:hover {
          border-color: var(--accent);
          background: var(--accent-dim);
          transform: translateY(-2px);
        }
        .footer-social-link img {
          width: 16px;
          height: 16px;
          filter: invert(1) brightness(0.8);
          transition: filter 0.25s;
        }
        .footer-social-link:hover img { filter: invert(1); }
        @media (max-width: 480px) {
          .footer-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <a href="#" className="footer-logo">
              CL<span>.</span>ARK
            </a>
            <p className="footer-copy">© {year} Clark. All rights reserved.</p>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/jclark007/"
              target="_blank"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <img src="/ButtonIcons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/J0hnux"
              target="_blank"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <img src="/ButtonIcons/github.svg" alt="GitHub" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
