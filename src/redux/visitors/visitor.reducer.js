import visitorTypes from "./visitor.types";

const { ADD_VISITOR, REMOVE_VISITOR, UPDATE_VISITOR } = visitorTypes;

const INITIAL_STATE = {
    list: []
}

const visitorReducer = (state = INITIAL_STATE, action) => {
    console.log("Reducer called " , state , action);
    
    const list = state.list;


    switch (action.type) {
        case ADD_VISITOR:

            return {
                ...state,
                list: [...list, action.payload]
            }

        case REMOVE_VISITOR:

            break;


        case UPDATE_VISITOR:

            break;


        default:
            return state;
    }
}

export default visitorReducer;