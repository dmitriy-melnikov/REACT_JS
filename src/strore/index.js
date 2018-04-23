import { createStore} from 'redux';
import reducer from '../reducer';

const store = createStore(reducer);

//dev only
window.store = store;
// in console store.getState()
//store.dispatch({type: 'INCREMENT'})

export default store
