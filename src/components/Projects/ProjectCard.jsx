import ProjectButtons from "./ProjectButtons";

const ProjectCard = (props) => {
  return (
    <div className="project__card_container">
      <img src="" alt="project_image" />
      <div className="project_card_content">
        <h3>{props.name}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          laborum illum cumque iste inventore quaerat! Cum exercitationem
          obcaecati at delectus quibusdam, error deserunt labore mollitia nulla
          repudiandae nam fugit nesciunt?
        </p>
        <ProjectButtons />
      </div>
    </div>
  );
};

export default ProjectCard;
