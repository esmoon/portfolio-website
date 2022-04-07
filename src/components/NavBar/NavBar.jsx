import Menu from 'components/menu/Menu';
import React from 'react';
import { Link } from 'react-scroll';
import s from './navBar.module.scss';

const NavBar = ({ active, setActive }) => {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        <div className={s.inner}>
          <Link spy={true} smooth={true} offset={0} duration={1000} to='home'>
            <p className={s.logo}>ESM</p>
          </Link>
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
