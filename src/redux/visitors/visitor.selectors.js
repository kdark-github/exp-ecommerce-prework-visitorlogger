import { createSelector } from 'reselect';

const visitorState = state => state.visitor;

export const visitorsList = createSelector(
    [visitorState],
    state => state.list
)
