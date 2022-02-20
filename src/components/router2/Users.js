import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setisLoading(false));
  }, []);

  let activeStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "0.1em",
    textDecoration: "none",
  };

  return (
    <div>
      <h1>USERS PAGE</h1>
      <h3>Filter a user</h3>
      <input type="text" placeholder="filter a user" value={searchParams.get("filter") || ""} onChange={e => {
        let filter = e.target.value;
        if(filter) {
          setSearchParams({filter});
        } else {
          setSearchParams({});
        }
      }}/>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <h3>Users</h3>
          <ul>
            {users.filter((user, i) => {
              let filter = searchParams.get("filter");
              if(!filter) return true;
              let name = user.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            }).map((user, i) => (
              <li key={user.id}>
                {/* IMPORTANT NOTE. its not /user, but "/users" */}
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to={`/users/${user.id}`}
                >
                  {user.name}
                </NavLink>
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
