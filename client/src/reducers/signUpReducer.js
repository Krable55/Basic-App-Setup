import { createAction, handleActions } from 'redux-actions';

export const signUp = createAction('SIGNUP');

const INITIAL_STATE = {
    password: '',
    rePassword: '',
    username: '',
    name: '',
    dob: '',
    email: '',
};

export default handleActions(
    {
        [signUp]: (state, {payload}) => ({
            ...state,
            ...payload,
        }),
    },
    INITIAL_STATE
);