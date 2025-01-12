const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreameReducer = require("../features/icecreame/iceCreamSlice");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceCreameReducer,
  },
//   middleware: (getMiddleware) => getMiddleware().concat(logger),
});

module.exports = store;
