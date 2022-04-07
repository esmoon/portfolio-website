import React from 'react';
import s from './about.module.scss';
import Im from 'assets/img/Im.png';
const About = () => {
  const description = [
    {
      side: 'left',
      text: 'Меня зовут Артем, мне 18 лет и я Frontend Developer имеющий 1 год опыта коммерческой разработки.',
    },
    {
      side: 'right',
      text: 'Моим хобби уже долгое время является программирование. С 15 лет делал разного уровня проекты. Помимо основной деятельности у меня есть и другие увлечения: веб-дизайн, инвестиции, спорт, в прошлом профессиональный футболист, и т.д',
    },
    {
      side: 'left',
      text: 'Мне есть о чем поговорить, есть что рассказать и чем поделиться. Если ты дочитал до этого момента, значит я тебя в серьез заинтересовал))',
    },
    {
      side: 'right',
      text: 'Думаешь как выйти на контакт? Переходи по ссылкам, которые будут ниже. Я всегда рад новым знакомствам :)',
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className='container'>
        <div className={s.inner}>
          <div className={s.about}>
            <img className={s.photo} src={Im} alt='myPhoto' />
            <div className={s.aboutDescription}>
              <p className={s.aboutText}>о, ну да</p>
              <p className={s.aboutText}>это я </p>
              <p className={s.aboutText}>Как я докатился до жизни такой? Что ж...</p>
            </div>
          </div>
          <div className={s.description}>
            {description.map((item) => {
              const side = item.side === 'left';
              return side ? (
                <p className={s.leftSideDesc}>{item.text}</p>
              ) : (
                <p className={s.rightSideDesc}>{item.text}</p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
