import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

const App = ({ Component, pageprops }) => {
  return <Component {...pageprops} />;
};
export default App;
