import React from 'react';
import { Link } from 'react-router-dom';

const ApplyItem = (props) => {
  return (
    <div>
      <li className="nav__item">
        <a href={props.link}>{props.title}</a>
      </li>
    </div>
  );
};

export default ApplyItem;
