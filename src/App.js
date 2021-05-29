import { useState } from 'react';
import { Component } from 'apprun/esm/component';

const model = 0;

const update = {
  '-1': state => state - 1,
  '+1': state => state + 1,
}

function view (state) {
  return <div>
    <h1>{state}</h1>
    <button onClick={() => this.run('-1')}>-1</button>
    <button onClick={() => this.run('+1')}>+1</button>
  </div>;
}

function App() {
  const [state, setState] = useState(model);
  const [component] = useState(new Component(model, setState, update).mount());
  return <>{view.bind(component)(state)}</>;
}

export default App;
