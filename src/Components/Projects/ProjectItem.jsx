const ProjectItem = ({ img, title, skills, repoUrl, liveLink }) => {
  return (
    <div className="project">
      <a className="project-card" target="_blank" href={liveLink}>
        <img src={img} alt="" />
        <div className="project-details">
          <p className="project-title">{title}</p>
          <div className="project-skills">
            {skills.map((skill) => {
              return <div className="project-skill-item">{skill}</div>;
            })}
          </div>
        </div>
      </a>
      <a className="project-github-repo" target="_blank" href={repoUrl}>
        <i class="devicon-github-original"></i>
        GO TO THE REPOSITORY
      </a>
    </div>
  );
};

export default ProjectItem;
