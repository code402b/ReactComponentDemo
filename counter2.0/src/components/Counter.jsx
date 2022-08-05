import React, { useState } from 'react';
import styled from 'styled-components';

import {
  ChangeCountButton,
  CountDisplay,
  CounterHeading,
  CounterNumInput,
  SubmitButton,
} from './components_index.jsx';
import { FlexContainer } from '../styles/styles_index.jsx'

export default function Counter({ id }) {

  // state hook tracking displayed count
  const [count, setCount] = useState(0);
  // state hook linked to controlled component
  const [inputNum, setInputNum] = useState(0);

  const handleSubmit = () => {
    // database interaction logic...
    setCount(inputNum);
  }

  return (
    <>
      <CounterContainer className="styled">

        <CounterHeading className="styled">Counter {id}</CounterHeading>

        <FlexContainer className="styled">
          <ChangeCountButton operation="-" setCount={setCount} />
          <CountDisplay className="styled">{count}</CountDisplay>
          <ChangeCountButton operation="+" setCount={setCount} />
        </FlexContainer>

        <FlexContainer className="styled">
          <CounterNumInput value={inputNum} handleChange={setInputNum} setState={setInputNum} />
          <SubmitButton handleSubmit={handleSubmit} />
        </FlexContainer>

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