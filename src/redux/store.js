import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import Reducers combined:
import rootReducer from './root-reducer';

//store takes Middlewares fcts inside an Array for applyMiddleware
const middlewares = [logger];

/*
const store = createStore( rootReducer, 
    applyMiddleware(...middlewares) ); 
export default store;
*/
//for creating the store:
export const store = createStore(rootReducer, 
    applyMiddleware(...middlewares));
    // ... => applying on all Array elemts <=> applyMiddleware(logger, .. )
