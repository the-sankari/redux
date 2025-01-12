const confugureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");

const store = confugureStore({
  reducer: cakeReducer,
});

module.exports = store;