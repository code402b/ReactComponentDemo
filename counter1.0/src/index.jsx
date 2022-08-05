import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

import Counter from './components/Counter.jsx';

const root = createRoot(document.getElementById('root'));

function App() {

  // state hook tracking number of counters
  const [counters, setCounters] = useState([1]);

  const addCounter = () => {
    setCounters(prev => ([...prev, prev[prev.length - 1] + 1]));
  }

  return (
    <>
      <div id="header">
        <button className="addCounter" onClick={addCounter}>Add One</button>
        {counters.length > 1 ? <h1>Counter Madness</h1> : <h1>A Counter</h1>}
      </div>

      <div className="container">
        {counters.map((id) => (
          <Counter id={id} key={id} />
        ))}
      </div>
    </>
  );
}

root.render(<App />);
