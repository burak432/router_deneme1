import react from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .finally(() => setisLoading(false));
  }, []);

  return (
    <div>
      <h1>USER PAGE</h1>
      {isLoading && <div>Loading...</div>}
      <h3>user id : {id} </h3>
      <div>
        <ul>
          <li>{user.name}</li>
          <li>{user.phone}</li>
          <li>{user.email}</li>
        </ul>
      </div>
    </div>
  );
}

export default User;
