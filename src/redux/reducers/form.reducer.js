import { FORM_TYPES } from '../types';
const { GET_ALL, CREATE_FORM } = FORM_TYPES;
const initial_state = [];

const FormReducer = (state=initial_state, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_ALL:
            return state;
        case CREATE_FORM:
            return [...state, payload];
        default: 
            return state;
    };
};

export default FormReducer;