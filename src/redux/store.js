import {applyMiddleware, createStore} from 'redux';
//import counter_reducer from './reducers/counter_reducer';
import  reduxThunk  from 'redux-thunk';
import reducers from './reducers';

 const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store=createStore( reducers,enhancer(applyMiddleware(reduxThunk)));


export default store;