import NameSection from 'components/UI/NameSection';
import AboutPage from 'pages/aboutPage/AboutPage';
import ContactsPage from 'pages/contacts/ContactsPage';
import MainPage from 'pages/mainPage/MainPage';
import ProjectsPage from 'pages/projectsPage/ProjectsPage';
import ReactVisibilitySensor from 'react-visibility-sensor';

function App() {
  return (
    <>
      <MainPage />
      <NameSection props={'Projects'} />
      <ProjectsPage />
      <NameSection props={'About me'} />
      <AboutPage />
      <NameSection props={'Contacts'} />
      <ReactVisibilitySensor>
        <ContactsPage />
      </ReactVisibilitySensor>
    </>
  );
}

export default App;
