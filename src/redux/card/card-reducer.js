import { cardActionsTypes } from './card-actions-types';

//defining a no-empty Reducer's initial state :
const INITIAL_STATE = {
    cardType: null
}
// passing INITIAL_STATE as 'default-parameter value' of state (JS6)
// in case state is Undefined/Not set => will b set as value='null'
const cardTypeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // TYPE=> "SET_CARD_TYPE"
        case cardActionsTypes.SET_CARD_TYPE:
            //rendering when 'action fired'
            console.log("cardActionsTypes.SET_CARD_TYPE =",cardActionsTypes.SET_CARD_TYPE," => action.payload  =",action.payload);
            return {
                ...state, //everything else in the state
                cardType: action.payload //<=our PAYLOAD, what is updated
            };
        default: return state; //in case no actions matching here
    }
}

export default cardTypeReducer;