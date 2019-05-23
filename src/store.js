import {createStore} from 'redux';
import state from './state';
import reducer from './reducers';

export default createStore(reducer, state)

 