import { createRoot } from 'react-dom/client';
import React, { useState } from 'react'
import styled from 'styled-components';

import Heading from './components/display/Heading.jsx'
import Counter from './components/Counter.jsx';
import FlexContainer from './styles/FlexContainer.styled.js';

const root = createRoot(document.getElementById('root'));

function App() {

  // ES6 trickery to serialize numbers into an array, simulating a data object
  const serialCounters = [...Array(9).keys()];

  return (
    <>
      <Heading text="Counter Madness"/>
      <FlexContainer>
        {serialCounters.map((id) => (
          <Counter id={id} key={id}/>
          ))}
      </FlexContainer>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

root.render(<App />);
