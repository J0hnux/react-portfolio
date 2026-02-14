import ProjectCard from "./Projects/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <>
      <style>{`
        .projects-section {
          background: var(--bg);
          position: relative;
        }
        .projects-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 7rem 2rem;
        }
        .projects-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .projects-header-left {}
        .projects-label {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .projects-label-num {
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.15em;
        }
        .projects-label-line {
          width: 30px;
          height: 1px;
          background: var(--border);
        }
        .projects-label-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .projects-heading {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--text);
        }
        .projects-heading em {
          color: var(--accent);
          font-style: normal;
        }
        .projects-subtext {
          font-size: 0.9rem;
          color: var(--text-muted);
          max-width: 260px;
          line-height: 1.7;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 480px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="projects-section section" id="projects">
        <div className="projects-inner">
          <div className="projects-header reveal">
            <div className="projects-header-left">
              <div className="projects-label">
                <span className="projects-label-num">02</span>
                <div className="projects-label-line" />
                <span className="projects-label-text">Work</span>
              </div>
              <h2 className="projects-heading">
                Selected
                <br />
                <em>Projects</em>
              </h2>
            </div>
            <p className="projects-subtext">
              A selection of things I've built. Each project pushed me to learn
              something new.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <ProjectCard
                  imgURL={project.imgURL}
                  imgAlt={project.imgAlt}
                  techStacks={project.techStacks}
                  name={project.name}
                  description={project.description}
                  websiteLink={project.websiteLink}
                  githubLink={project.githubLink}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
