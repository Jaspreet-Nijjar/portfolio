import '../styles/About.css';
import { IconsData } from '../data/IconsData';
import { TechItem } from './TechItem';

export const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h1 className="about-large-header">About</h1>
        <p className="about-content">
          I am a Junior Front End Developer based in London. My background is in
          the sciences which has allowed me to develop my analytical, creative
          and problem- solving skills which has driven me towards learning Front
          End Development.
        </p>

        <p className="about-content">
          Since 2022, I have gained a range of skills including HTML, CSS,
          JavaScript, React and TypeScript and I love to bring a design to life
          and enjoy the creative process that adds value and accomplishes the
          end goal.
        </p>
      </div>

      {/* <h1>Tech Skills</h1>
      <section class="skills-container">
        {IconsData.map((icon, index) => (
          <TechItem icon={icon} key={index} />
        ))}
      </section> */}
    </section>
  );
};
