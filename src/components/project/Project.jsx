import React from 'react';
import s from './projects.module.scss';
const Project = () => {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        <div className={s.inner}>
          <a href='#s' className={s.title}>
            Social network click to view
          </a>
          <p className={s.about}>Stack React, typescript, redux-toolkit, git</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
