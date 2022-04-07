import About from 'components/aboutMe/About';
import React from 'react';
import s from './about.module.scss';

const AboutPage = () => {
  return (
    <div className={s.wrapper}>
      <About />
    </div>
  );
};

export default AboutPage;
