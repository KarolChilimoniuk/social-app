import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./services/reducers";
import { IInitState } from "./services/interfaces/interfaces";

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
