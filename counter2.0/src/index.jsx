import { createRoot } from 'react-dom/client';
import React, { useState } from 'react'
import styled from 'styled-components';

import Heading from './components/display/Heading.jsx'
import Counter from './components/Counter.jsx';
import SubmitButton from './components/input/SubmitButton.jsx';
import { FlexContainer, Header } from './components/styles/styles_index.jsx';

const root = createRoot(document.getElementById('root'));

function App() {

  // ES6 trickery to serialize numbers into an array, simulating a data object
  //const serialCounters = [...Array(9).keys()];
  const [counters, setCounters] = useState([1]);

  const addCounter = () => {
    setCounters(prev => ([...prev, prev[prev.length - 1] + 1]));
  }

  return (
    <>
      <Header>
        <SubmitButton handleClick={addCounter} text={'Add One'} />
        <Heading text={counters.length > 1 ? "Counter Madness 2.0" : "A Counter 2.0"} />
      </Header>
      <FlexContainer>
        {counters.map((id) => (
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
