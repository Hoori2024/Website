import React from 'react';
import { Link } from "react-router-dom";

import HooriLogo from './../../assets/image/HooriLogo.png' 
import './Headers.sass';

export default function Navbar() {
    const [isActive, setisActive] = React.useState(false)

    return (
<nav className='navbar has-shadow is-fixed-top' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            className='LogoHoori'
            src={HooriLogo}
            alt='Logo'
          />
        </a>
        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>
              Accueil
            </a>
            <Link to="/" className='navbar-item'>
              FAQ
            </Link>
            <Link to="/" className='navbar-item'>
              Nous Contacter
            </Link>
            <Link to="/signin" className='navbar-item'>
              Connexion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
};