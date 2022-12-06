import { combineReducers } from 'redux';

// reducers 
import FormReducer  from './form.reducer';

const appReducer = combineReducers({
    FormReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;