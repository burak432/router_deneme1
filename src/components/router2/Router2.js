import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import User from "./User";
import Errorpage from "./Errorpage";
import "./style.css";

function Router2() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a user to display here</p>
                </main>
              }
            />
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Router2;
