import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Errorpage from "./Errorpage";

function Routerdeneme1() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about/:username">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:username" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <footer>
        Here is the footer 
      </footer>
    </Router>
  );
}

export default Routerdeneme1;
