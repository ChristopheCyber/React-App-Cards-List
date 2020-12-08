// For writing the Redux Store:
import { combineReducers } from 'redux';

// import userReducer from './user/user-reducer';
import searchBoxReducer from './search-box/search-box-reducer';

export default combineReducers({
    //key property(=> slice of the state = individual Reducer)
    // user: userReducer,
    keySearchBox: searchBoxReducer
}) // exporting all the JSON full state object
