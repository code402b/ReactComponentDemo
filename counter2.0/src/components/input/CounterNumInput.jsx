import React from 'react'
import styled from 'styled-components';


export default function CounterNumInput({
  value,
  //handleChange,
  setState,
}) {

  // you can house code validating user input within the input component
  const handleChange = (e) => {
    const num = parseInt(e.target.value);
    num >= 0 ? setState(num) : null;
  }

  return (
    <CounterInput
      type="number"
      value={value}
      // onChange={(e) => handleChange(parseInt(e.target.value))}
      onChange={handleChange}
    ></CounterInput>
  )
}

const CounterInput = styled.input`
  width: 40px;
  margin: 5px;
`