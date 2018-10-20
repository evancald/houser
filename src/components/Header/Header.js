import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div className='header-container'>
      <Link to='/'>
        <img className='header-logo' src={logo} alt={'houser logo'} />
      </Link>
      <h1 className='header-title'>Houser</h1>
    </div>
  )
}

export default Header;