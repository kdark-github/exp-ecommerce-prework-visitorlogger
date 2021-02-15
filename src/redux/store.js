import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from "redux-persist";



const middleWare = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWare));
console.log("The store is ", store);

 const persistedStore = persistStore(store);


export {persistedStore};
export default store;

