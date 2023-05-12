import '../styles/Projects.css';
import { ProjectsData } from '../data/ProjectsData';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects-large-header">Projects</h1>

      <section class="projects-container">
        {ProjectsData.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </section>
    </section>
  );
};
