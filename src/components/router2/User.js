import react from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>USER PAGE</h1>
      <h3>user id : {id} </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        exercitationem impedit ex dolore doloribus magni laboriosam quod totam
        quos labore?
      </p>
    </div>
  );
}

export default User;
