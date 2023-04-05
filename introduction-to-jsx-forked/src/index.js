import React from "react";
import Reactdom from "react-dom";

function Card(props) {
  return (
    <div>
      <h1 className="myclass">{props.name}</h1>
      <h1 className="myclass">{props.tel}</h1>
    </div>
  );
}

Reactdom.render(
  <div>
    <Card name="Nitin" tel="8957181042" />
    <Card name="Shubham" tel="8957181047" />
  </div>,
  document.getElementById("root")
);
