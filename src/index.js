import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import counterReducer from './reducer'
import * as serviceWorker from './serviceWorker';

const store = createStore(counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const increment = () => {
  store.dispatch({type: 'INCREMENT'})
}

const decrement = () => {
  store.dispatch({type: 'DECREMENT'})
}

const Counter = () => {
  return (
    <div>
      <h1>{store.getState()}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}




const render = () => ReactDOM.render(<Counter />, document.getElementById('root'));

render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
