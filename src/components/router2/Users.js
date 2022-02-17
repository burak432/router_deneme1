import react from "react";
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
      <hr />
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <h3>Users</h3>
          <ul>
            {users.map((user, i) => (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Users;
