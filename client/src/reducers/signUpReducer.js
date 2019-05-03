import { createAction, handleActions } from 'redux-actions';

export const signUpReducer = createAction('SIGNUP');

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
        [signUpReducer]: (state, {payload}) => ({
            ...state,
            ...payload,
        }),
    },
    INITIAL_STATE
);