import { searchBoxActionsTypes } from './search-box-actions-types';

//defining a no-empty Reducer's initial state :
const INITIAL_STATE = {
    handleChangeFct: null
}
// passing INITIAL_STATE as 'default-parameter value' of state (JS6)
// in case state is Undefined/Not set => will b set as value='null'
const searchBoxReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // TYPE=> "SET_SEARCH_FNCT"
        case searchBoxActionsTypes.SET_SEARCH_FNCT:
            //rendering when 'action fired'
            return {
                ...state, //everything else in the state
                handleChangeFct: action.payload //<=our PAYLOAD, what is updated
            };
        default: return state; //in case no actions matching here
    }
}

export default searchBoxReducer;