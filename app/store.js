import { pujas, languages, bookings, user } from "./reducer/index";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers({ pujas, languages, bookings, user });
const store = createStoreWithMiddleware(reducer);

export default store