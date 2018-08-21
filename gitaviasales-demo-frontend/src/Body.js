import React from "react";
import calendar from "./images/calendar.svg";

function WhereTo(props) {
  return (
    <div>
      <div>
        {props.test}
        {props.types}
      </div>
    </div>
  );
}

const test1 = {
  test1: { calendar }
};

export default function Body() {
  return <h1>QWERTY</h1>;
}
