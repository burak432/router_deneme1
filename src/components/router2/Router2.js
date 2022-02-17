import react from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import User from "./User";

function Router2() {
  let activeStyle = {
    backgroundColor : "#000",
    color : "#fff",
    padding: "0.5em"
  };

  return (
    <Router>
      <nav>
        <li>
          <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/users">Users</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default Router2;
