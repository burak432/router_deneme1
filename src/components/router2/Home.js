import { Link, Outlet } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <nav className="navmenu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Home;
