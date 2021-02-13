import visitorTypes from "./visitor.types";

const { ADD_VISITOR, REMOVE_VISITOR, UPDATE_VISITOR } = visitorTypes;


export const addVisitorToList = item => ({
    type: ADD_VISITOR,
    payload: item
})
