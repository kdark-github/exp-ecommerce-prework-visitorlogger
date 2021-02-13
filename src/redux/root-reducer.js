import { combineReducers } from "redux";
import visitorReducer from "./visitors/visitor.reducer";




const rootReducer = combineReducers({

    visitor : visitorReducer
})

export default rootReducer;
