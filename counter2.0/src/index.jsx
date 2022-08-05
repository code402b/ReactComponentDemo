import { createRoot } from 'react-dom/client';
import React, { useState } from 'react'
import styled from 'styled-components';

import Counter from './Counter.jsx';

const root = createRoot(document.getElementById('root'));

function App() {

  const serialCounters = [...Array(6).keys()];

  return (
    <Container>
      {serialCounters.map((id) => (
        <Counter id={id} key={id}/>
        ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

root.render(<App />);
