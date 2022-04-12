import ReactGA from 'react-ga';

// const useAnalyticsEventTracker = ({ categoryText, actionText, labelText }) => {
//   const category = categoryText;
//   const eventTracker = (action = actionText, label = labelText) => {
//     ReactGA.event({ category, action, label });
//   };
//   return eventTracker;
// };
// export default useAnalyticsEventTracker;
const useAnalyticsEventTracker = (category = 'Blog category') => {
  const eventTracker = (action = 'test action', label = 'test label') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
