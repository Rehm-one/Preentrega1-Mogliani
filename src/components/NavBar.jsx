import React from 'react';
import logo from '../assets/logo.png';
import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {


    return (
      <nav className='navBar'>
        <img className='logo' src={logo} />
        <div className='nav'>
          <ul>
            <li>Terror</li>
            <li>Shooter</li>
            <li>Simuladores</li>
          </ul>
        </div>
       <CartWidget/>
      </nav>        

    )
  }
  
  export default NavBar
  