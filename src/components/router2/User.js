import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  let { id } = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setisLoading(false));
  }, [id]);

  return (
    <div>
      <h1>USER DETAILS</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <h3>user id : {id} </h3>
          <ul>
            <li>{user.name}</li>
            <li>{user.phone}</li>
            <li>{user.email}</li>
          </ul>
          <Link to={`/users/${parseInt(id) + 1}`}>
            Next user({parseInt(id) + 1})
          </Link>
        </div>
      )}
    </div>
  );
}

export default User;
