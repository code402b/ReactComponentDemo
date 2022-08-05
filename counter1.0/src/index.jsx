import { createRoot } from 'react-dom/client';
import React, { useState } from 'react'

import Counter from './components/Counter.jsx';

const root = createRoot(document.getElementById('root'));

function App() {

  const serialCounters = [...Array(1).keys()];

  return (
    <>
      <h1>Counter Madness</h1>
      <div className="container">
        {serialCounters.map((id) => (
          <Counter id={id} key={id}/>
          ))}
      </div>
    </>
  )
}

root.render(<App />);
