import React from 'react';
import './Header.scss';
import logo from './stl-logo.png';
import video from './MARCO.mp4';

const Header = () => {
  return (
    <header id="header">
      <div id="video">
        <video
          autoplay="true"
          muted="true"
          preload="none"
          width="1920"
          н
          height="850"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="shadow">
        <img src={logo} alt="" id="logo" />
      </div>
    </header>
  );
};

export default Header;
