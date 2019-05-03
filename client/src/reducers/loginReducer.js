import { createAction, handleActions } from 'redux-actions';

export const login = createAction('LOGIN');

// Reducer
const INITIAL_STATE = {
    password: "",
    email: ""
};

export default handleActions(
    {
        [login]: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
    INITIAL_STATE
);