# REDUX

### The 3 Core Concepts of Redux

1. A STORE that holds te state of the applicaiton.
2. An ACTION that describes what happened in the applicaiton.
3. A reducer which handles the action and descides how to update the state

### Three Principles

1. "The global state of the applicaiton is stored as an object inside a single store"

   Maintain our application state ib a single object which would be managed by the Redux store.

2. "The only way to change the state is to dispatc an action, an object that describes what happened"

   To update the state of the app, we need to let Redux know about that with an aciton. Not allowed to directly update the state object.

3. "To specify how the state tree is updated based on actions, you write pure reducers"

   `Reducer - (previouseState, aciton) => newState`

<img src='./redux.drawio.svg'>
