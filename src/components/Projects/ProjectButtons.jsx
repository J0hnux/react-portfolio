const ProjectButtons = (props) => {
  return (
    <div className="project__buttons__container">
      <a href={props.websiteLink} target="_blank">
        <img src="/ButtonIcons/globe.svg" alt="visit link" />
        Visit Website
      </a>
      <a href={props.githubLink} target="_blank">
        <img src="/ButtonIcons/github.svg" alt="visit source on github" />
        Request Github Access
      </a>
    </div>
  );
};

export default ProjectButtons;
