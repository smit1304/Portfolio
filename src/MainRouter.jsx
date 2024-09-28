import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Services from "./components/services/services";
import Experience from "./components/Experience/Experience";
const MainRouter = () => {
  return (
    <>
      <div>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRouter;
