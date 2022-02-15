import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Errorpage from "./Errorpage";

function Deneme2() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/Contact">Contact</Link>
        <br />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default Deneme2;
