import { searchBoxActionsTypes } from './search-box-actions-types';
//corresponding to what search-box Reducer is expecting
export const setSearchBox = arg => ({
    type: searchBoxActionsTypes.SET_SEARCH_FNCT,
    payload: arg
  });