import React from "react";
import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    nmae: "Manoj",
    color: "Green",
    Bike: "BMW",
  });

  const buttons = {
    padding: "20px",
  };
  const change = () => {
    setData({
      nmae: "Anjali",
      color: "Black",
      Bike: "Benz",
    });
  };
  const { nmae, Bike, color } = data;
  return (
    <div>
      <h3>The correct count is {count}</h3>
      <button
        style={buttons}
        onClick={() => {
          setCount(count + 1);
        }}>
        +
      </button>
      <button
        style={buttons}
        onClick={() => {
          setCount(count - 1);
        }}>
        -
      </button>

      <p>THis is a example with UseState</p>
      <br></br>
      <h1>
        helllo my name is "{nmae}"" and my favoirte color is "{color}" and he
        owns "{Bike}" !!
      </h1>
      <button onClick={change}>CHNAGE IT</button>
    </div>
  );
};
