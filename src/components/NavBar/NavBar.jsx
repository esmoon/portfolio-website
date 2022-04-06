import Menu from 'components/menu/Menu';
import React from 'react';
import s from './navBar.module.scss';

const NavBar = ({ active, setActive }) => {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        <div className={s.inner}>
          <p className={s.logo}>ESM</p>
          <div className={s.burgerMenu} onClick={() => setActive(!active)}>
            <span />
          </div>
        </div>
      </div>
      <Menu isActive={active} setActive={setActive} />
    </div>
  );
};

export default NavBar;
