import React, { useEffect, useState } from 'react';
import s from './mainBlock.module.scss';
import NavBar from './../NavBar/NavBar';

const MainBlock = () => {
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {}, [menuActive]);
  return (
    <>
      <NavBar active={menuActive} setActive={setMenuActive} />
      <div className={s.wrapper}>
        <div className={s.inner}>
          <div className='container'>
            <div className={menuActive ? s.contentDisable : s.content}>
              <p className={s.mainTitle}>Someting about me</p>
              <p className={s.mainText}>HELLO!</p>
              <div className={s.arrow}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlock;
