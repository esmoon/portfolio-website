import NameSection from 'components/UI/NameSection';
import MainPage from 'pages/mainPage/MainPage';
import ProjectsPage from 'pages/projectsPage/ProjectsPage';

function App() {
  return (
    <>
      <MainPage />
      <NameSection props={'Projects'} />
      <ProjectsPage />
      <NameSection props={'About me'} />
    </>
  );
}

export default App;
