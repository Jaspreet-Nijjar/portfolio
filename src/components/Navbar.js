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
        <Link smooth to="home">
          <img src={Logo} alt="" className="nav-logo" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times ' : 'fas fa-bars'} />
        </div>
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <Link smooth to="home" onClick={closeMobileMenu}>
          Home
        </Link>

        <Link smooth to="about" onClick={closeMobileMenu}>
          About
        </Link>

        <Link smooth to="projects" onClick={closeMobileMenu}>
          Projects
        </Link>

        <Link smooth to="contact" onClick={closeMobileMenu}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};
