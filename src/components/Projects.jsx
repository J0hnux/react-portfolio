import ProjectCard from "./Projects/ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h1>Projects</h1>
      <div className="project__cards">
        <ProjectCard name="Real Estate - Work In Development" />
        <ProjectCard name="Car Rental - Work In Development" />
        <ProjectCard name="Blog Site - Work In Development" />
      </div>
    </section>
  );
};

export default Projects;
