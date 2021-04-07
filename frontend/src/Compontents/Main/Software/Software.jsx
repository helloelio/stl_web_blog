import React from 'react';
import './Software.scss';

const Software = () => {
  return (
    <div className="software">
      <h5 className="software__title">Enhanced by the software</h5>
      <div className="software__content">
        <div className="software__item">
          <img
            src="https://static.tildacdn.com/tild6433-3564-4463-b064-643964346237/mech2.jpg"
            alt=""
          />
          <span>Clear Muscle signals</span>
        </div>
        <div className="software__item">
          <img
            src="https://static.tildacdn.com/tild6433-3564-4463-b064-643964346237/mech2.jpg"
            alt=""
          />
          <span>ML cloud processing</span>
        </div>
        <div className="software__item">
          <img
            src="https://static.tildacdn.com/tild6433-3564-4463-b064-643964346237/mech2.jpg"
            alt=""
          />
          <span>Platform for training</span>
        </div>
      </div>
      <div className="awards">
        <img
          src="https://thumb.tildacdn.com/tild6663-3363-4164-a632-316631613833/-/resize/610x/-/format/webp/eitHaccelerated_EU.png"
          alt=""
          className="awards__item"
        />
        <img
          src="https://thumb.tildacdn.com/tild3931-6531-4364-b265-653733636338/-/resize/200x/-/format/webp/Meet-Vernadsky-Chall.jpg"
          alt=""
          className="awards__item"
        />
        <img
          src="https://thumb.tildacdn.com/tild3034-3738-4330-b039-633664313465/-/resize/180x/-/format/webp/SMRK_logo.png"
          alt=""
          className="awards__item"
        />
      </div>
    </div>
  );
};

export default Software;
