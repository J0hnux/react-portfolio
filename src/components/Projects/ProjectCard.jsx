const ProjectCard = (props) => {
  return (
    <>
      <style>{`
        .project-card {
          background: var(--bg-2);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          border-color: rgba(200, 244, 97, 0.25);
          transform: translateY(-4px);
        }
        .project-image-wrap {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: var(--bg-3);
          position: relative;
        }
        .project-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(8,9,13,0.6) 100%);
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-img { transform: scale(1.04); }
        .project-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex: 1;
        }
        .project-tech-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .project-tech-label {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-right: 0.25rem;
        }
        .project-tech-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
          filter: grayscale(50%);
          transition: filter 0.2s;
        }
        .project-tech-icon:hover { filter: grayscale(0%); }
        .project-name {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: var(--text);
          text-transform: uppercase;
        }
        .project-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.8;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-btn-row {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .project-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0.6rem 1.2rem;
          border-radius: 3px;
          transition: all 0.25s ease;
        }
        .project-btn-primary {
          background: var(--accent);
          color: var(--bg);
        }
        .project-btn-primary:hover { opacity: 0.85; }
        .project-btn-secondary {
          color: var(--text-muted);
          border: 1px solid var(--border);
        }
        .project-btn-secondary:hover {
          color: var(--text);
          border-color: rgba(242, 237, 228, 0.2);
        }
        .project-btn img {
          width: 14px;
          height: 14px;
          filter: invert(1);
        }
        .project-btn-primary img { filter: invert(0) brightness(0); }
      `}</style>
      <div className="project-card">
        <div className="project-image-wrap">
          <img className="project-img" src={props.imgURL} alt={props.imgAlt} />
        </div>
        <div className="project-body">
          <div className="project-tech-row">
            <span className="project-tech-label">Stack:</span>
            {props.techStacks.map((stack, i) => (
              <img
                key={i}
                className="project-tech-icon"
                src={stack.imgURL}
                alt={stack.imgAlt}
                title={stack.imgAlt}
              />
            ))}
          </div>
          <h3 className="project-name">{props.name}</h3>
          <p className="project-desc">{props.description}</p>
          <div className="project-btn-row">
            <a
              href={props.websiteLink}
              target="_blank"
              className="project-btn project-btn-primary"
            >
              <img src="/ButtonIcons/globe.svg" alt="" />
              Live Site
            </a>
            <a
              href={props.githubLink}
              target="_blank"
              className="project-btn project-btn-secondary"
            >
              <img src="/ButtonIcons/github.svg" alt="" />
              Source
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
