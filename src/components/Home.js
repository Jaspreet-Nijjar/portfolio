import '../styles/Home.css';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <h2 className="smaller-header">Hi my name is</h2>
        <h1 className="large-header">Jaspreet Nijjar</h1>
        <h1 className="large-header">I'm a Front End Developer</h1>
        <p className="home-content">
          I am a passionate Front End Developer from London with a strong
          interest in <strong>JavaScript</strong> and <strong>React</strong>.
          Currently, I am developing my skills with <strong>TypeScript</strong>.
          I love to create and build responsive apps.
        </p>
        <Link
          smooth={true}
          spy={true}
          offset={-100}
          className="home-btn"
          to="projects"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
};
