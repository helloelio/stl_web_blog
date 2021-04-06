import react from 'react';
import './Apply.scss';

function Apply() {
  return (
    <div className="apply">
      <h3 className="apply__title">Apply</h3>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="">become a user</a>
          </li>
          <li className="nav__item">
            <a href="">join our team</a>
          </li>
          <li className="nav__item">
            <a href="">invest in the company</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Apply;
