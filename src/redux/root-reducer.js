// For writing the Redux Store:
import { combineReducers } from 'redux';

// import userReducer from './user/user-reducer';
import cardTypeReducer from './card/card-reducer';

export default combineReducers({
    //key property(=> slice of the state = individual Reducer)
    // user: userReducer,
    keyCardType: cardTypeReducer
}) // exporting all the JSON full state object
