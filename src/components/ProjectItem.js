import { Link } from 'react-router-dom';

export const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <img src={project.img} alt="personal project" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.tech.map((stack) => (
        <p>{stack}</p>
      ))}
      <Link to={project.code}>View Code</Link>
      <Link to={project.preview}>Live Preview</Link>
    </div>
  );
};
