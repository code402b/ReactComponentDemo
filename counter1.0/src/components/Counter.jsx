import React, { useState } from 'react'

export default function Counter({ id }) {

  // state hook tracking displayed count
  const [count, setCount] = useState(0);
  // state hook linked to controlled component
  const [inputNum, setInputNum] = useState(0);

  return (
    <>
      <div className="counterContainer">

        <h2>Counter {id}</h2>

        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <div>{count}</div>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <div className="counterForm">
          <input
            type="number"
            value={inputNum}
            onChange={(e) => setInputNum(parseInt(e.target.value))}
            ></input>
          <button onClick={() => setCount(inputNum)}>Set Count</button>
        </div>

      </div>
    </>

  )
}