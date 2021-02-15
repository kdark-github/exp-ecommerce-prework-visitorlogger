import { combineReducers } from "redux";
import visitorReducer from "./visitors/visitor.reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';



const persistConfig = {
    storage,
    key: 'root',
    whitelist: ["visitor"]
}





const rootReducer = combineReducers({

    visitor: visitorReducer
})

const persistreducer = persistReducer(persistConfig, rootReducer);
export { rootReducer };

export default persistreducer;