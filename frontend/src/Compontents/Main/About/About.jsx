import react from 'react';
import './About.scss';
import image from './about-img.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about__title">Myoelectric hand prosthesis</div>
      <div className="about__image">
        <img src={image} alt="" />
      </div>
      <div className="about__content">
        <div className="about__text">
          <h2 className="about__content-title">Functional</h2>
          <p className="about__content-text">
            Light, automatically changes grips
          </p>
        </div>
        <div className="about__text">
          <h2 className="about__content-title">Functional</h2>
          <p className="about__content-text">
            Light, automatically changes grips
          </p>
        </div>
        <div className="about__text">
          <h2 className="about__content-title">Functional</h2>
          <p className="about__content-text">
            Light, automatically changes grips
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
