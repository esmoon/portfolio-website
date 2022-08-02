import NameSection from 'components/UI/NameSection';
import AboutPage from 'pages/aboutPage/AboutPage';
import ContactsPage from 'pages/contacts/ContactsPage';
import MainPage from 'pages/mainPage/MainPage';
import ProjectsPage from 'pages/projectsPage/ProjectsPage';
import ReactVisibilitySensor from 'react-visibility-sensor';
import useAnalyticsEventTracker from 'hooks/useAnalyticsEventTracker';

function App() {
  const analytics = useAnalyticsEventTracker('Scroll to');
  const onChange = (isVisible) => {
    if (isVisible) {
      analytics('scroll to contacts', 'contacts');
    }
  };

  return (
    <>
      <MainPage />
      <NameSection props={'Projects'} />
      <ProjectsPage />

      <NameSection props={'About me'} />
      <AboutPage />
      <NameSection props={'Contacts'} />
      <ReactVisibilitySensor onChange={onChange}>
        <ContactsPage />
      </ReactVisibilitySensor>
    </>
  );
}

export default App;
