import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png'; // Hamburger menu icon
import { Link } from 'react-scroll';

function Header() {
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} className="logo" alt="Logo" />

      {/* Hamburger icon for mobile */}
      {mobile && !menuOpened ? (
        <div onClick={() => setMenuOpened(true)} className="bars-icon">
          <img src={Bars} alt="menu icon" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className={`header-menu ${menuOpened ? 'show' : ''}`}>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="home" smooth={true} duration={500} activeClass="active">
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="programs" smooth={true} duration={500} activeClass="active">
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="whyus" smooth={true} duration={500} activeClass="active">
              Why Us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="plans" smooth={true} duration={500} activeClass="active">
              Plans
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link to="testimonials" smooth={true} duration={500} activeClass="active">
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
