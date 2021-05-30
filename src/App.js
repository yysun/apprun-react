import React from 'react';
import { Component } from 'apprun/esm/component';
import toReact from 'apprun/react';

class MyComponent extends Component {
  state = 0;
  update = {
    '-1': state => state - 1,
    '+1': state => state + 1,
  }
  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <button onClick={() => this.run('-1')}>-1</button>
      <button onClick={() => this.run('+1')}>+1</button>
    </div>;
  }
}

const App = toReact(MyComponent);
export default App;
