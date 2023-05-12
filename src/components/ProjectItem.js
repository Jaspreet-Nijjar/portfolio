import { Link } from 'react-router-dom';
import '../styles/ProjectItem.css';

export const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <img src={project.img} alt="personal project" className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-stack">
        {project.tech.map((stack) => (
          <p className="project-stack-item">{stack}</p>
        ))}
      </div>

      <Link to={project.code}>View Code</Link>
      <Link to={project.preview}>Live Preview</Link>
    </div>
  );
};
