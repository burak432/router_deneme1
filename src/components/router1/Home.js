import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  let { username } = useParams();

  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={()=> navigate("/about")}>Click here for About </button>
    </div>
  );
}

export default Home;
