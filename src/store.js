import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import RootReducer from './Rootreducer'

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;