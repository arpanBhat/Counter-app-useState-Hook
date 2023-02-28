import React, { useState } from "react";
function App(){

const [state,setState]=useState(0);

const Increment=()=>{
  setState(state+1);
  
  }

const Decrement=()=>{
  setState(state-1);
}

  return(
    <div className="container">
      <div className="title">A simple counter app using UseState Hook</div>
    <div className="counter-container">
      <div className="main-div">
        <button className="btn-increment" onClick={Increment}>+</button>
        <h1 className="value">{state}</h1>
        <button className="btn-decrement"onClick={Decrement}>-</button>
      </div>
      </div>
    </div>
  )

}

export default App;