import ProjectCard from "./Projects/ProjectCard";
import projects from "../data/projects";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h1>{projects.length > 1 ? "Projects" : "Project"}</h1>
      <div className="project__cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgURL={project.imgURL}
            imgAlt={project.imgAlt}
            techStacks={project.techStacks}
            name={project.name}
            description={project.description}
            websiteLink={project.websiteLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
