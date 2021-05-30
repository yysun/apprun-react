# Use AppRun with Create React App

Using AppRun and React in conjunction is one of the best ways to build a web app.

> [React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

> [AppRun](https://apprun.js.org/) is an elm-inspired event-driven library.

With just one line of code, we can convert AppRun components to React components. Thus, we have the [elm-inspired AppRun architecture](https://apprun.js.org/docs/architecture/) in the React apps.

![apprun-react](apprun-react.png)


## Getting Started

- Run `npm start`
- Edit [App.jsx](#src/App.jsx) and watch it live update!


## How it's Made

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Then, we add AppRun.

```sh
npm install AppRun -D
```

Then, we can create an [AppRun Component](https://apprun.js.org/docs/component/) and convert it to a React Component.

```js
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
```

That's all and vave fun!

(C) 2021, Yiyi Sun