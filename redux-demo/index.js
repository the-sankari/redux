const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// Action
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    info: "First redux action",
    payload: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

// Initial state

const initialState = {
  numOfCakes: 10,
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
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
store.dispatch(restockCake(4));

unsubscribe();
