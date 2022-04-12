import React from 'react';
import s from './about.module.scss';
import Im from 'assets/img/Im.png';
const About = () => {
  const description = [
    {
      id: '1',
      side: 'left',
      text: 'Меня зовут Артем, мне 18 лет и я Frontend Developer',
    },
    {
      id: '2',
      side: 'right',
      text: 'Моим хобби уже долгое время является программирование. С 15 лет делал разного уровня проекты. Помимо основной деятельности у меня есть и другие увлечения: веб-дизайн, инвестиции, спорт, в прошлом профессиональный футболист, и т.д',
    },
    {
      id: '3',
      side: 'left',
      text: 'Мне есть о чем поговорить, есть что рассказать и чем поделиться. Если ты дочитал до этого момента, значит я тебя в серьез заинтересовал))',
    },
    {
      id: '4',
      side: 'right',
      text: 'Думаешь как выйти на контакт? Переходи по ссылкам, которые будут ниже. Я всегда рад новым знакомствам :)',
    },
  ];

  return (
    <div id='about' className={s.wrapper}>
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
                <p key={item.id} className={s.leftSideDesc}>
                  {item.text}
                </p>
              ) : (
                <p key={item.id} className={s.rightSideDesc}>
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
