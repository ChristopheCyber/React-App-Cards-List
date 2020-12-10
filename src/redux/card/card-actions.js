import { cardActionsTypes } from './card-actions-types';
//corresponding to what search-box Reducer is expecting
export const setCardType = arg => ({
    type: cardActionsTypes.SET_CARD_TYPE,
    payload: arg
  });