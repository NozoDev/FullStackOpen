import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of react";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
}

export default App;
