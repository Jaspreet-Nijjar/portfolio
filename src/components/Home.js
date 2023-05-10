import '../styles/Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <h2 className="smaller-header">Hi my name is</h2>
        <h1 className="large-header">Jaspreet Nijjar</h1>
        <h1 className="large-header">I'm a Front End Developer</h1>
        <Link className="home-btn">View Projects</Link>
      </div>
    </section>
  );
};
