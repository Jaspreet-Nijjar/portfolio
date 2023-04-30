import '../styles/TechItem.css';

export const TechItem = ({ icon }) => (
  <div className="tech-item">
    <img src={icon.img} alt="logo of tech skill" />
    <p>{icon.text}</p>
  </div>
);
