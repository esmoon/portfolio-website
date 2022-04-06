import React from 'react';
import s from './titleSection.module.scss';
const NameSection = ({ props }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <div className='container'>
          <p className={s.title}>{props}</p>
        </div>
      </div>
    </div>
  );
};

export default NameSection;
