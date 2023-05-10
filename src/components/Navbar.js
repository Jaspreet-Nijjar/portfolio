import '../styles/Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <div className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times ' : 'fas fa-bars'} />
        </div>
      </div>

      <ul
        className={click ? 'nav-menu active' : 'nav-menu'}
        onClick={closeSideBar}
      >
        <Link to="#">Home</Link>
        <Link
          to="#about"
          onClick={() => {
            let about = document.getElementById('about');
            about && about.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About
        </Link>
        <Link
          to="#projects"
          onClick={() => {
            let projects = document.getElementById('projects');
            projects && projects.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Projects
        </Link>
        <Link
          to="#contact"
          onClick={() => {
            let contact = document.getElementById('contact');
            contact && contact.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact
        </Link>
      </ul>
    </>
  );
};
