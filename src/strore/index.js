import { createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middleware/logger';

const enhancer = applyMiddleware(logger);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;
// in console store.getState()
//store.dispatch({type: 'INCREMENT'})

export default store
