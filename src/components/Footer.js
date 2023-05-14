import '../styles/Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023. Created and Designed by Jaspreet Nijjar</p>
      <div className="footer-links">
        <a href="https://github.com/Jaspreet-Nijjar">
          <FaGithub class="footer-icon" />
        </a>

        <a href="https://www.linkedin.com/in/jaspreet-nijjar-3266a7276/">
          <FaLinkedin class="footer-icon" />
        </a>
      </div>
    </footer>
  );
};
