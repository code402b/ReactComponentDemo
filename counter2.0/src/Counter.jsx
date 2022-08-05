import React, { useState } from 'react';
import styled from 'styled-components';

import {
  ChangeCountButton,
  CountDisplay,
  CounterHeading,
  CounterNumInput,
  SubmitButton,
} from './components/components_index.jsx';
import { CounterFlexContainer } from './styles/styles_index.jsx'

export default function Counter({ id }) {

  // state hook tracking displayed count
  const [count, setCount] = useState(0);
  // state hook linked to controlled component
  const [inputNum, setInputNum] = useState(0);

  const handleSubmit = () => {
    setCount(inputNum);
  }

  return (
    <>
      <CounterContainer>

        <CounterHeading>Counter {id}</CounterHeading>

        <CounterFlexContainer>
          <ChangeCountButton operation="-" setCount={setCount} />
          <CountDisplay>{count}</CountDisplay>
          <ChangeCountButton operation="+" setCount={setCount} />
        </CounterFlexContainer>

        <CounterFlexContainer>
          <CounterNumInput value={inputNum} handleChange={setInputNum} />
          <SubmitButton handleSubmit={handleSubmit} />
        </CounterFlexContainer>

      </CounterContainer>
    </>

  )
}

const CounterContainer = styled.div`
  width: 260px;
  border: 2px solid teal;
  margin: 10px;
  box-shadow: 3px 3px 3px lightgrey;
`