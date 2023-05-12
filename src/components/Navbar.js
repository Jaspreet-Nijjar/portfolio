import '../styles/Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" smooth={true} spy={true} offset={-100}>
          <img src={Logo} alt="" className="nav-logo" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times ' : 'fas fa-bars'} />
        </div>
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <Link
          to="home"
          smooth={true}
          spy={true}
          offset={-100}
          onClick={closeMobileMenu}
        >
          Home
        </Link>

        <p>Test</p>

        <Link
          to="about"
          smooth={true}
          spy={true}
          offset={-100}
          onClick={closeMobileMenu}
        >
          About
        </Link>

        <Link
          to="projects"
          smooth={true}
          spy={true}
          offset={-100}
          onClick={closeMobileMenu}
        >
          Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          spy={true}
          offset={-100}
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};
