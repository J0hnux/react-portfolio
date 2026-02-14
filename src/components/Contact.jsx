const Contact = () => {
  return (
    <>
      <style>{`
        .contact-section {
          background: var(--bg-2);
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border);
        }
        .contact-bg-text {
          position: absolute;
          bottom: -0.15em;
          right: -0.02em;
          font-family: var(--font-display);
          font-size: clamp(80px, 22vw, 260px);
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(242, 237, 228, 0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }

        /* Mobile-first: single column */
        .contact-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 1.25rem;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .contact-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .contact-label-num {
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.15em;
        }
        .contact-label-line {
          width: 24px;
          height: 1px;
          background: var(--border);
        }
        .contact-label-text {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .contact-heading {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 9vw, 5rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 1.25rem;
        }
        @media (max-width: 640px) {
          .contact-heading {
            font-size: clamp(1rem, 9vw, 5rem);
          }
        }
        .contact-heading em {
          color: var(--accent);
          font-style: normal;
        }
        .contact-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .contact-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--bg);
          background: var(--accent);
          /* full-width on mobile for easy tapping */
          width: 100%;
          padding: 1rem 2rem;
          min-height: 52px;
          border-radius: 3px;
          text-decoration: none;
          transition: all 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .contact-cta:hover, .contact-cta:active {
          opacity: 0.88;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(200, 244, 97, 0.25);
        }
        .contact-cta-arrow {
          font-size: 1.1rem;
          transition: transform 0.25s ease;
        }
        .contact-cta:hover .contact-cta-arrow { transform: translateX(4px); }

        /* Info items: horizontal row on mobile */
        .contact-aside {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1.5rem 2.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border);
        }
        .contact-info-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .contact-info-label {
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .contact-info-value {
          font-size: 0.88rem;
          color: var(--text);
          font-weight: 500;
        }
        .contact-status {
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          font-weight: 500;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
          box-shadow: 0 0 8px var(--accent);
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Desktop: side-by-side layout, CTA not full-width */
        @media (min-width: 769px) {
          .contact-inner {
            grid-template-columns: 1fr auto;
            align-items: end;
            gap: 4rem;
            padding: 7rem 2rem;
          }
          .contact-cta {
            width: auto;
            display: inline-flex;
          }
          .contact-aside {
            flex-direction: column;
            flex-wrap: nowrap;
            gap: 1.5rem;
            border-top: none;
            padding-top: 0;
            min-width: 180px;
          }
        }
      `}</style>

      <section className="contact-section section" id="contact">
        <div className="contact-bg-text">Hello</div>
        <div className="contact-inner">
          <div className="reveal">
            <div className="contact-label">
              <span className="contact-label-num">03</span>
              <div className="contact-label-line" />
              <span className="contact-label-text">Contact</span>
            </div>
            <h2 className="contact-heading">
              Let's Work
              <br />
              <em>Together.</em>
            </h2>
            <p className="contact-desc">
              Whether it's a startup, a small business, or a personal project —
              I'm ready to help bring your ideas to life, starting with a great
              website.
            </p>
            <a href="mailto:jc24.doliente@gmail.com" className="contact-cta">
              Say Hello
              <span className="contact-cta-arrow">→</span>
            </a>
          </div>

          <div className="contact-aside reveal reveal-delay-2">
            <div className="contact-info-item">
              <span className="contact-info-label">Email</span>
              <span className="contact-info-value">
                jc24.doliente@gmail.com
              </span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-label">Location</span>
              <span className="contact-info-value">Philippines</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-label">Status</span>
              <span className="contact-status">
                <span className="status-dot" />
                Available
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
