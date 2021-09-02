import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

ReactDOM.render(
  <div>
    <h1 style={someStyle}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);

// const currentTime = new Date(2021, 1, 1, 8);
// const realTime = currentTime.getHours();

// let greeting;

// const someStyle = {
//   color: ""
// };

// if (realTime < 12) {
//   greeting = "Good morning";
//   someStyle.color = "red";
// } else if (realTime < 18) {
//   greeting = "Good afternoon";
//   someStyle.color = "green";
// } else {
//   greeting = "Good evening";
//   someStyle.color = "blue";
// }
