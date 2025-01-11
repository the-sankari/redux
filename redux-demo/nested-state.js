const redux = require("redux");
const produce = require("immer").produce;
const initialState = {
  name: "Winnie",
  address: {
    street: "1234 Main St",
    city: "Minneapolis",
    state: "MN",
    zip: "55401",
  },
};

const STREET_UPDATE = "STREET_UPDATE";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("Initial state: ", store.getState());

store.subscribe(() => {
  console.log("Updated state: ", store.getState());
});

store.dispatch(updateStreet("4321 Elm St"));
