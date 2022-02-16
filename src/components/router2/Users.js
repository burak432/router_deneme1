import react from "react";
import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h1>USERS PAGE</h1>
      <hr />
      <h3>Users</h3>
      <ul>
          <li>
              <Link to="/user/mike">Mike</Link>
          </li>
          <li>
              <Link to="/user/jane">Jane</Link>
          </li>
          <li>
              <Link to="/user/nate">Nate</Link>
          </li>
      </ul>
    </div>
  );
}

export default Users;
