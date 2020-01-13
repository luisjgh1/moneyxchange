import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import landing from "./landing/reducer";

const rootReducer = combineReducers({
  landing
});

export default createStore(rootReducer, applyMiddleware(thunk));
