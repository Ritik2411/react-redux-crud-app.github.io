import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { contactReducer } from "./Reducer";

const store = createStore(contactReducer,applyMiddleware(logger))

export default store