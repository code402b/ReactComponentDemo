import React from 'react'
import styled from 'styled-components';


export default function CounterNumInput({ value, handleChange }) {

  return (
    <input
      type="number"
      value={value}
      onChange={(e) => handleChange(parseInt(e.target.value))}
    ></input>
  )
}

const CounterInput = styled.input`
  width: 40px;
  margin: 5px;
`