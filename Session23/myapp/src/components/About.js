import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Component</h2>
      <Outlet />
    </div>
  );
}

export default About;
