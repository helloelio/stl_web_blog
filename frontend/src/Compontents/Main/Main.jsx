import React from 'react';
import axios from 'axios';
import './Main.css';
import Preview from './Preview/Preview';
import About from './About/About';
import Apply from './Apply/Apply';
import Technology from './Technology/Technology';
import Software from './Software/Software';
import Contacts from './Contacts/Contacts';

function Main() {
  return (
    <main id="main">
      <div className="container">
        <Preview />
        <About />
      </div>
      <Apply />
      <div className="container">
        <Technology />
        <Software />
        <Contacts />
      </div>
    </main>
  );
}

export default Main;
