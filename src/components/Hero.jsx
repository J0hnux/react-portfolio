import { useEffect, useRef } from "react";

const Hero = () => {
  const tagRef = useRef(null);

  useEffect(() => {
    // Typewriter for the tagline
    const tags = [
      "Fullstack Developer.",
      "Creative Builder.",
      "Detail Oriented.",
    ];
    let tagIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const current = tags[tagIndex];
      if (!tagRef.current) return;

      if (!deleting) {
        tagRef.current.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        tagRef.current.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          tagIndex = (tagIndex + 1) % tags.length;
        }
      }
      timer = setTimeout(type, deleting ? 60 : 100);
    };

    timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 70px;
        }
        .hero-bg-number {
          position: absolute;
          right: -0.05em;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-display);
          font-size: clamp(200px, 30vw, 420px);
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(242, 237, 228, 0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.2s forwards;
        }
        .hero-eyebrow-line {
          width: 40px;
          height: 1px;
          background: var(--accent);
        }
        .hero-eyebrow-text {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 10vw, 9rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.4s forwards;
        }
        .hero-name-accent {
          color: var(--accent);
          display: block;
          font-size: 8rem;
        }
        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.6s forwards;
        }
        .hero-typewriter-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          white-space: nowrap;
        }
        .hero-typewriter-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          flex-shrink: 0;
        }
        .hero-typewriter-inner::after {
          content: "."; /* fixes shake */
          visibility: hidden;
          white-space: nowrap;
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
        }
        .hero-typewriter-inner {
          display: inline-flex;
          align-items: center;
          min-width: 18ch; /* stable character width */
          position: relative;
        }
        .hero-typewriter {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
          white-space: nowrap;
        }
        .hero-typewriter-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--accent);
          margin-left: 3px;
          flex-shrink: 0;
          vertical-align: middle;
          animation: blink 0.8s step-end infinite;
        }
        .hero-desc {
          max-width: 380px;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.75;
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          animation: fadeUp 0.7s ease 1s forwards;
        }
        .hero-scroll-hint span {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .hero-scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, var(--text-muted), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text);
          border: 1px solid var(--border);
          padding: 0.85rem 1.75rem;
          border-radius: 3px;
          transition: all 0.25s ease;
          margin-top: 1rem;
        }
        .hero-cta:hover {
          background: var(--accent-dim);
          border-color: var(--accent);
          color: var(--accent);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        
        @media (max-width: 768px) {
          .hero-bottom { flex-direction: column; align-items: flex-start; }
          .hero-desc { max-width: 100%; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-bg-number">FE</div>

        <div className="hero-inner">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">
              Available for work · Based in Philippines
            </span>
          </div>

          <h1 className="hero-name">
            Full-Stack
            <span className="hero-name-accent">Developer.</span>
          </h1>

          <div className="hero-bottom">
            <div>
              <div className="hero-typewriter-wrap">
                <span className="hero-typewriter-label">I am a </span>
                <span className="hero-typewriter-inner">
                  <span className="hero-typewriter" ref={tagRef}></span>
                  <span className="hero-typewriter-cursor" />
                </span>
              </div>
              <p className="hero-desc" style={{ marginTop: "1.25rem" }}>
                Hi, I'm Clark — a self-taught fullstack web developer passionate
                about crafting beautiful, performant web experiences.
              </p>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <a href="#projects" className="hero-cta">
                  View Work <span>→</span>
                </a>
                <a href="#contact" className="hero-cta">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>
    </>
  );
};

export default Hero;
