import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Portafolio from "../pages/Portafolio";
import Contact from "../pages/Contact";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
