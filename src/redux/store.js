import { createStore ,applyMiddleware } from "redux";
import rootReducer  from "./rootReducer";
import {persistStore} from 'redux-persist'
import logger from "redux-logger";


const middlewares = [logger];


const store = createStore(rootReducer,  applyMiddleware(...middlewares));

export default store;

export const persistor = persistStore(store);
