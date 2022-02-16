import React from "react";
import { useParams } from "react-router-dom";


function About() {
  let { username } = useParams();

  return (
  <div>
    ABOUT PAGE for user : {username} 
  </div>
  );
}

export default About;
