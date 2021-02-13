import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const middleWare = [logger , thunk];

const store = createStore(rootReducer ,applyMiddleware(...middleWare) );


export default store;

