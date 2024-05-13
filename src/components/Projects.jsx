import ProjectCard from "./Projects/ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h1>Projects</h1>
      <div className="project__cards">
        <ProjectCard name="Real Estate" />
        <ProjectCard name="Car Rental" />
        <ProjectCard name="Blog Site" />
      </div>
    </section>
  );
};

export default Projects;
