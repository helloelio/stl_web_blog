import React from 'react';
import './Contacts.scss';

function Contacts() {
  return (
    <div className="contacts">
      <h6 className="contacts__title">
        For cooperation and proposals contact us:
      </h6>
      <div className="contacts__content">
        <a className="contacts__mail" href="mailto:hello@elio.com">
          hello@elio.com
        </a>
        <ul className="contacts__list">
          <li>
            <a href="">a</a>
          </li>
          <li>
            <a href="">b</a>
          </li>
          <li>
            <a href="">c</a>
          </li>
          <li>
            <a href="">d</a>
          </li>
          <li>
            <a href="">e</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
