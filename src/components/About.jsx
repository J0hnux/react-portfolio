const About = () => {
  const techs = [
    { name: "HTML5", icon: "/Technologies/html.svg" },
    { name: "CSS3", icon: "/Technologies/css3.svg" },
    { name: "JavaScript", icon: "/Technologies/javascript.svg" },
    { name: "React", icon: "/Technologies/react.svg" },
    { name: "Next.js", icon: "/Technologies/nextjs.svg" },
    { name: "Tailwind", icon: "/Technologies/tailwind.svg" },
    { name: "Sass", icon: "/Technologies/sass.svg" },
  ];

  return (
    <>
      <style>{`
        .about-section {
          background: var(--bg-2);
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border);
        }
        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 7rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }
        .about-label {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .about-label-num {
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.15em;
        }
        .about-label-line {
          width: 30px;
          height: 1px;
          background: var(--border);
        }
        .about-label-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .about-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 2.5rem;
        }
        .about-heading em {
          color: var(--accent);
          font-style: normal;
        }
        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .about-text p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.85;
        }
        .about-text p strong {
          color: var(--text);
          font-weight: 600;
        }
        .about-right {
          padding-top: 1rem;
        }
        .about-photo-container {
          position: relative;
          margin-bottom: 3rem;
        }
        .about-photo-frame {
          background: var(--bg-3);
          border: 1px solid var(--border);
        }
        .about-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: filter 0.4s ease;
        }
        .about-photo:hover { filter: grayscale(0%); }
        .about-photo-accent {
          position: absolute;
          bottom: -12px;
          right: -12px;
          width: 80px;
          height: 80px;
          background: var(--accent);
          border-radius: 2px;
          z-index: -1;
        }
        .about-photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 5rem;
          font-weight: 800;
          color: var(--border);
          background: var(--bg-3);
        }
        .tech-section {
          margin-top: 2rem;
        }
        .tech-heading {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }
        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 0.5rem;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 4px;
          transition: all 0.25s ease;
          cursor: default;
        }
        .tech-item:hover {
          border-color: var(--accent);
          background: var(--accent-dim);
          transform: translateY(-2px);
        }
        .tech-item img {
          width: 26px;
          height: 26px;
          object-fit: contain;
        }
        .tech-item span {
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-align: center;
        }
        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-right { order: -1; }
          .about-photo-frame { aspect-ratio: 3/2; }
        }
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="about-section section" id="about">
        <div className="about-inner">
          <div className="about-left reveal">
            <div className="about-label">
              <span className="about-label-num">01</span>
              <div className="about-label-line" />
              <span className="about-label-text">About Me</span>
            </div>
            <h2 className="about-heading">
              Building the
              <br />
              <em>Web</em> with
              <br />
              Passion.
            </h2>
            <div className="about-text">
              <p>
                Hello! I'm <strong>Clark</strong>, a self-taught fullstack web
                developer developer based in the Philippines. Beyond web dev,
                I'm also learning game development — but my focus right now is
                crafting excellent web experiences.
              </p>
              <p>
                I stay sharp by keeping up with updates to my tech stack. When
                something changes or improves, I make it a point to learn it
                quickly and apply it in real projects.
              </p>
              <p>
                My most recent project was a &nbsp;
                <strong>
                  full-stack automotive concierge and asset management platform
                  &nbsp;
                </strong>
                built with Next.js, Tailwind, PostgreSQL, PayMongo. It includes
                authentication, role-based access control, subscription
                workflows, and a relational database architecture.
              </p>
            </div>
          </div>

          <div className="about-right reveal reveal-delay-2">
            <div className="about-photo-container">
              <div className="about-photo-frame w-full bg-[var(--bg-3)] border border-[var(--border)] rounded overflow-hidden">
                <img
                  src="/my-pic.jpg"
                  alt="mypic"
                  className="about-photo w-full max-h-[65vh] object-contain rounded-xl select-none transition-colors duration-200"
                />
              </div>
              <div className="about-photo-accent" />
            </div>

            <div className="tech-section">
              <p className="tech-heading">Tech Stack</p>
              <div className="tech-grid">
                {techs.map((tech) => (
                  <div className="tech-item" key={tech.name}>
                    <img src={tech.icon} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
