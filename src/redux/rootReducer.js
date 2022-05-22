import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import viewsReducer from "./reducers/viewsReducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['views']
}

const rootReducer = combineReducers({

    views: viewsReducer

})

export default persistReducer(persistConfig, rootReducer);