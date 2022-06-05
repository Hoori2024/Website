import React from 'react';
import HooriLogo from './../../assets/image/HooriLogo.png' 
import './Headers.sass';

export default function Navbar() {
    const [isActive, setisActive] = React.useState(false)

    return (
<nav className='navbar has-shadow is-fixed-top' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src={HooriLogo}
            alt='Logo'
            width='112'
            height='28'
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
              Home
            </a>
            <a href='/' className='navbar-item'>
              FAQ
            </a>
            <a href='/' className='navbar-item'>
              Nous Contacter
            </a>
            <a href='/' className='navbar-item'>
              Connexion
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
};