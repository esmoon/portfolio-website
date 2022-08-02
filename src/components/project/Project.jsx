import React from 'react';
import s from './projects.module.scss';
import useAnalyticsEventTracker from 'hooks/useAnalyticsEventTracker';
const Project = () => {
  const gaEventTracker = useAnalyticsEventTracker('Project');
  return (
    <div id='projects' className={s.wrapper}>
      <div className='container'>
        <div className={s.inner}>
          <a
            href='https://github.com/esmoon/Social-network'
            className={s.title}
            target='_blank'
            rel='noreferrer'
            onClick={() => gaEventTracker('click project', 'Project Social network')}
          >
            Social network click to view
          </a>
          <p className={s.about}>Stack React, typescript, redux-toolkit, git</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
