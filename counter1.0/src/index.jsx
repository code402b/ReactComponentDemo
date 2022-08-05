import { createRoot } from 'react-dom/client';
import React, { useState } from 'react'

import Counter from './components/Counter.jsx';

const root = createRoot(document.getElementById('root'));

function App() {

  const [count, setCount] = useState(0);
  const [inputNum, setInputNum] = useState(0);

  const serialCounters = [...Array(6).keys()];

  return (
    <div className="container">
      {serialCounters.map((id) => (
        <Counter id={id} key={id}/>
        ))}
    </div>
  )
}

root.render(<App />);
