import React from "react";
import ReactDom from "react-dom";

function Heading() {
  return <h1 style={{ color: "red" }}>Created by Nitin</h1>;
}

ReactDom.render(
  <div>
    <Heading></Heading>

    <h4 style={{ color: "blue" }}>Copyright 2023</h4>
  </div>,
  document.getElementById("root")
);
