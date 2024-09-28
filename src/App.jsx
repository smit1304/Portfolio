import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <>
      <Router>
        <MainRouter />
      </Router>
    </>
  );
};

export default App;
