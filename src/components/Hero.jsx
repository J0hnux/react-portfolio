import { useEffect, useRef } from "react";

const Hero = () => {
  const tagRef = useRef(null);

  useEffect(() => {
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
          min-height: 100svh; /* svh fixes mobile browser chrome */
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 60px; /* matches mobile header height */
        }
        .hero-bg-number {
          position: absolute;
          right: -0.05em;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-display);
          font-size: clamp(120px, 35vw, 420px);
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
          padding: 3rem 1.25rem 5rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.2s forwards;
          flex-wrap: wrap;
        }
        .hero-eyebrow-line {
          width: 30px;
          height: 1px;
          background: var(--accent);
          flex-shrink: 0;
        }
        .hero-eyebrow-text {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .hero-name {
          font-family: var(--font-display);
        }
        .hero-bottom {
          opacity: 0;
          animation: fadeUp 0.7s ease 0.6s forwards;
        }
        .hero-typewriter-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .hero-typewriter-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          flex-shrink: 0;
        }
        .hero-typewriter-inner {
          display: inline-flex;
          align-items: center;
          min-width: 18ch;
          position: relative;
        }
        .hero-typewriter-inner::after {
          content: ".";
          visibility: hidden;
          white-space: nowrap;
          font-family: var(--font-display);
          font-size: clamp(1rem, 4vw, 1.3rem);
          font-weight: 700;
        }
        .hero-typewriter {
          font-family: var(--font-display);
          font-size: clamp(1rem, 4vw, 1.3rem);
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
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 420px;
          margin-bottom: 2rem;
        }
        .hero-cta-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text);
          border: 1px solid var(--border);
          /* Mobile-friendly tap target: min 48px height */
          padding: 0.9rem 1.5rem;
          min-height: 48px;
          border-radius: 3px;
          transition: all 0.25s ease;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
          flex: 1;
          min-width: 140px;
        }
        .hero-cta:hover, .hero-cta:active {
          background: var(--accent-dim);
          border-color: var(--accent);
          color: var(--accent);
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 1.5rem;
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
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--text-muted), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Desktop refinements */
        @media (min-width: 769px) {
          .hero-section { padding-top: 70px; }
          .hero-inner { padding: 5rem 2rem; }
          .hero-eyebrow { margin-bottom: 2rem; }
          .hero-name { margin-bottom: 2.5rem; }
          .hero-cta {
            flex: none;
            min-width: auto;
          }
          .hero-scroll-hint { bottom: 2.5rem; }
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

          <h1 className="hero-name text-[clamp(3rem,13vw,9rem)] font-extrabold leading-[0.9] tracking-[-0.02em] uppercase text-[var(--text)] mb-8 opacity-0 animate-[fadeUp_0.7s_ease_0.4s_forwards]">
            Full-Stack
            <span className="text-[var(--accent)] block md:text-[clamp(3rem,8vw,5rem)] text-[clamp(1rem,8vw,5rem)]">
              Developer.
            </span>
          </h1>

          <div className="hero-bottom">
            <div className="hero-typewriter-wrap">
              <span className="hero-typewriter-label">I am a </span>
              <span className="hero-typewriter-inner">
                <span className="hero-typewriter" ref={tagRef}></span>
                <span className="hero-typewriter-cursor" />
              </span>
            </div>

            <p className="hero-desc">
              Hi, I'm Clark — a self-taught fullstack web developer passionate
              about crafting beautiful, performant web experiences.
            </p>

            <div className="hero-cta-row">
              <a href="#projects" className="hero-cta">
                View Work <span>→</span>
              </a>
              <a href="#contact" className="hero-cta">
                Get In Touch
              </a>
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
