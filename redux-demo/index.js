const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";

// Action
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    info: "First redux action",
    quantity: 1,
  };
};

// Initial state

const initialState = {
  numOfCakes: 20,
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    default:
      return state;
  }
};

// Store

const store = createStore(reducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
