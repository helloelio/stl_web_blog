import react from 'react';
import './Apply.scss';
import ApplyItem from './ApplyItem/ApplyItem';

function Apply() {
  return (
    <div className="apply">
      <h3 className="apply__title">Apply</h3>
      <nav className="nav">
        <ul className="nav__list">
          <ApplyItem link="http://github.com" title="become a user" />
          <ApplyItem link="http://youtube.com" title="join our team" />
          <ApplyItem link="http://vk.com" title="invest in the company" />
        </ul>
      </nav>
    </div>
  );
}

export default Apply;
