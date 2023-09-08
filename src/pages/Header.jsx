import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/Fichier 2.png';
import '../css/navbar.css';

function Header() {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  return (
    <header>
      <div className='logo'>
        <img className='image' src={logo} alt='' />
      </div>
      <div className='hamburger' onClick={toggleNavbar}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <nav className='nav-bar' ref={navRef}>
        <ul>
          <Link to='/' className='link'>
            Accueil
          </Link>
          <Link to='/vetements' className='link'>
            Vêtements
          </Link>
          <Link to='/chaussures' className='link'>
            Chaussures
          </Link>
          <Link to='/meubles' className='link'>
            Meubles
          </Link>
          <Link to='/login' className='link active'>
           Sign Up
          </Link>
          <Link to='/cart' className='link'>
            Panier
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
