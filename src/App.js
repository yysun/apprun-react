import { useState } from 'react';
import { Component } from 'apprun/esm/component';

function App() {

  const [state, view] = useState(0);

  const update = {
    '-1': state => state - 1,
    '+1': state => state + 1,
  }

  const app = new Component(state, view, update).mount();

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => app.run('-1')}>-1</button>
      <button onClick={() => app.run('+1')}>+1</button>
    </div>
  )
}

export default App;
