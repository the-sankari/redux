const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecreame/iceCreamSlice").iceCreamActions;

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(4));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(5));

unsubscribe();
