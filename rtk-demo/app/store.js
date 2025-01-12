const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreameReducer = require("../features/icecreame/iceCreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceCreameReducer,
  },
});

module.exports = store;
