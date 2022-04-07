import React from 'react';
import s from './contacts.module.scss';
import telegram from 'assets/img/telegram.svg';
import github from 'assets/img/github.svg';
import mail from 'assets/img/mail.svg';
const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <div className='container'>
        <div className={s.inner}>
          <a
            className={s.telegram}
            href='https://tttttt.me/es_moon'
            target='_blank'
            rel='noreferrer'
          >
            <img src={telegram} alt='telegram' />
          </a>
          <a
            className={s.github}
            href='https://github.com/esmoon666'
            target='_blank'
            rel='noreferrer'
          >
            <img src={github} alt='github' />
          </a>
          <a
            className={s.mail}
            href='mailto:es-moon@mail.ru?subject=Вопрос по работе'
            target='_blank'
            rel='noreferrer'
          >
            <img src={mail} alt='mail' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
