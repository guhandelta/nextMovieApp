import React, { useState } from "react";

const Sidenav = () => {
  // Provifing state to Funcitonal component using Hooks
  const [count, setCount] = useState(0); // -> useState() resturns a StateArray
  //   Explanation for the above statement
  //   const stateArray = useState(0);
  //   const count = stateArray[0];
  //   const setCount = stateArray[1];

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">
          Category 1
        </a>
        <a href="#" className="list-group-item">
          Category 2
        </a>
        <a href="#" className="list-group-item">
          Category 3
        </a>
      </div>
      <div className="">
        <button onClick={increment} className="btn btn-primary">
          Increment Number
        </button>
        <button onClick={decrement} className="btn btn-primary">
          Decrement Number
        </button>
        <h1>{count}</h1>
      </div>
    </>
  );
};
export default Sidenav;
