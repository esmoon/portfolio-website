import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import s from './menu.module.scss';
const Menu = ({ isActive, setActive }) => {
  useEffect(() => {
    const scroll = () => {
      if (isActive === false) {
        document.body.style.overflow = 'visible';
      } else {
        document.body.style.overflow = 'hidden';
      }
    };
    return scroll();
  }, [isActive]);
  return (
    <div className={isActive ? s.wrapperActive : s.wrapper}>
      <div className={s.inner}>
        <div className='container'>
          <div className={s.content}>
            <Link
              onClick={() => setActive(false)}
              to='home'
              className={s.logo}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              ESM
            </Link>
            <div className={s.rightSide}>
              <div className={s.closeBtn} onClick={() => setActive(false)}>
                <svg
                  width='40'
                  height='34'
                  viewBox='0 0 40 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22.3449 17.0088L39.4912 2.43444C40.153 1.89118 40.1714 0.994813 39.5322 0.432303C38.8931 -0.130207 37.8386 -0.145805 37.1768 0.397457C37.1629 0.408824 37.1493 0.420439 37.1358 0.432303L19.9893 15.0067L2.84298 0.43222C2.1812 -0.111042 1.12665 -0.0954442 0.487523 0.467066C-0.135991 1.0158 -0.135991 1.8857 0.487523 2.43444L17.6339 17.0088L0.487523 31.5833C-0.162833 32.1361 -0.162833 33.0325 0.487523 33.5854C1.13798 34.1381 2.19252 34.1381 2.84298 33.5854L19.9893 19.011L37.1357 33.5854C37.7975 34.1287 38.852 34.1131 39.4911 33.5505C40.1146 33.0018 40.1146 32.1319 39.4911 31.5833L22.3449 17.0088Z'
                    fill='white'
                  />
                </svg>
              </div>
              <ul className={s.menu}>
                <Link
                  className={s.sectionTitle}
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  onClick={() => setActive(false)}
                >
                  Projects
                </Link>
                <Link
                  className={s.sectionTitle}
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  onClick={() => setActive(false)}
                >
                  Contacts
                </Link>
                <Link
                  className={s.sectionTitle}
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                  onClick={() => setActive(false)}
                >
                  About me
                </Link>
              </ul>
              <a
                href='mailto:es-moon@mail.ru?subject=Предложение по работе'
                target='_blank'
                rel='noreferrer'
                className={s.mailContact}
              >
                es-moon@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
