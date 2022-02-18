import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setisLoading(false));
  }, []);

  return (
    <div>
      <h1>USERS PAGE</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <h3>Users</h3>
          <ul>
            {users.map((user, i) => (
              <li key={user.id}>
                {/* IMPORTANT NOTE. its not /user, but "/users" */}
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Users;
