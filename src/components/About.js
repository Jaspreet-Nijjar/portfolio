import '../styles/About.css';
import { IconsData } from '../data/IconsData';
import { TechItem } from './TechItem';

export const About = () => {
  return (
    <section class="about">
      <h1>Tech Skills</h1>
      <section class="skills-container">
        {IconsData.map((icon, index) => (
          <TechItem icon={icon} key={index} />
        ))}
      </section>
    </section>
  );
};
