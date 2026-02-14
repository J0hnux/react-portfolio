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
          padding: 5rem 1.25rem;
        }
        .projects-header {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        .projects-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .projects-label-num {
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 0.15em;
        }
        .projects-label-line {
          width: 24px;
          height: 1px;
          background: var(--border);
        }
        .projects-label-text {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .projects-heading {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 10vw, 4rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--text);
        }
        @media (max-width: 640px) {
          .projects-heading {
            font-size: clamp(2.10rem, 6.5vw, 3rem);
          }
        }
        .projects-heading em {
          color: var(--accent);
          font-style: normal;
        }
        .projects-subtext {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 100%;
        }

        /* Mobile: single column cards */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        /* Tablet+: multi-column */
        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (min-width: 900px) {
          .projects-inner { padding: 7rem 2rem; }
          .projects-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 4rem;
            gap: 2rem;
          }
          .projects-subtext { max-width: 260px; }
        }
      `}</style>

      <section className="projects-section section" id="projects">
        <div className="projects-inner">
          <div className="projects-header reveal">
            <div>
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
