import { createAction, handleActions } from 'redux-actions';

export const loginReducer = createAction('LOGIN');

// Reducer
const INITIAL_STATE = {
    password: "",
    email: ""
};

export default handleActions(
    {
        [loginReducer]: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
    INITIAL_STATE
);