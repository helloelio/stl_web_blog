import React from 'react';
import logo from './stl-logo.png';
import './Footer.scss';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer__logo">
        <a href="./index.html">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="footer__copyright">
        Copyright © 2021 Esper Inc. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
