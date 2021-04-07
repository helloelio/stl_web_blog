import React from 'react';
import './Technology.scss';

const Technology = () => {
  return (
    <div className="technology">
      <h4 className="technology__title">
        We develop products in the areas of orthopedics and neurology.
      </h4>
      <div className="technology__content">
        <div className="technology__item">
          <img
            src="https://static.tildacdn.com/tild6433-3564-4463-b064-643964346237/mech2.jpg"
            alt=""
          />
          <span>Mechatronics</span>
        </div>
        <div className="technology__item">
          <img
            src="https://static.tildacdn.com/tild6433-3564-4463-b064-643964346237/mech2.jpg"
            alt=""
          />
          <span>Wearable electronics</span>
        </div>
        <div className="technology__item">
          <img
            src="https://static.tildacdn.com/tild6433-3564-4463-b064-643964346237/mech2.jpg"
            alt=""
          />
          <span>Neural implants</span>
        </div>
      </div>
    </div>
  );
};

export default Technology;
