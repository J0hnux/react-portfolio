import ProjectButtons from "./ProjectButtons";

const ProjectCard = (props) => {
  return (
    <div className="project__card_container">
      <div className="project-image-container">
        <img className="project-image" src={props.imgURL} alt={props.imgAlt} />
      </div>
      <div className="project_card_content">
        <div className="technology-stack">
          <h3>Technology Stack Used</h3>
          <ul>
            {props.techStacks.map((stack, index) => (
              <li key={index}>
                <img src={stack.imgURL} alt={stack.imgAlt} />
              </li>
            ))}
          </ul>
        </div>
        <div className="project-details">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
        </div>
        <ProjectButtons
          websiteLink={props.websiteLink}
          githubLink={props.githubLink}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
