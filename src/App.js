import { useState } from 'react';
import { Component } from 'apprun/esm/component';

const mount = (state, view, update) => new Component(state, view, update).mount();

function App() {

  const [state, setState] = useState(0);

  const update = {
    '-1': state => state - 1,
    '+1': state => state + 1,
  }

  const app = mount(state, setState, update);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => app.run('-1')}>-1</button>
      <button onClick={() => app.run('+1')}>+1</button>
    </div>
  )

}

export default App;
