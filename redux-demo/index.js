const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

// Middleware
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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

const orderIceCream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    info: "First redux action",
    payload: qty,
  };
};

const restockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};
// Initial state

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// Reducer

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreameReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };

    default:
      return state;
  }
};

// Combine Reducers

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreame: iceCreameReducer,
});

// Store

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(4);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(4);

unsubscribe();
