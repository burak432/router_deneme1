import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={()=> navigate("/about")}>Click here for About </button>
    </div>
  );
}

export default Home;
