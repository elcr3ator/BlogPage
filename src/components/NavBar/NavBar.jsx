import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import './NavBar.css';
import images from '../../constants/images';


const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar' id='main-page'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="Feed Motion Advertising Logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__serif'><a href="#services">Послуги</a></li>
        <li className='p__serif'><a href="#about-us">Про нас</a></li>
        <li className='p__serif'><a href="#reviews">Відгуки</a></li>
        <ol className='p__serif'><a href="#contacts">Контакти</a></ol>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu className="overlay__open" color='#343434' fontSize={18} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay'>
          <div className='app__navbar-smallscreen-curveimage'>
            <img src={images.toggle_curve} alt="Curve"/>
          </div>
          <div className="app__navbar-smallscreen_overlaycontent-1150">
            <ul className='app__navbar-smallscreen-links-1150' onClick={() => setToggleMenu(false)}>
              <li className='p__serifoverlay'><a href="#">Послуги</a></li>
              <li className='p__serifoverlay'><a href="#">Про нас</a></li>
              <li className='p__serifoverlay'><a href="#">Відгуки</a></li>
              <ol className='p__serifoverlay'><a href="#">Контакти</a></ol>
            </ul>
            <div className="app__navbar-smallscreen-palmimage">
              <img src={images.palm} alt="Palm image"/>
            </div>
          </div>
          <div className="app__navbar-smallscreen_overlaycontent-850">
            <ul className='app__navbar-smallscreen-links-850' onClick={() => setToggleMenu(false)}>
              <li className='p__serifoverlay'><a href="#">Послуги</a></li>
              <li className='p__serifoverlay'><a href="#">Про нас</a></li>
              <li className='p__serifoverlay'><a href="#">Відгуки</a></li>
              <li className='p__serifoverlay'><a href="#">Контакти</a></li>
            </ul>
          </div>
        </div>
        )}

      </div>
    </nav>
  )
}

export default NavBar;
