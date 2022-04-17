import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import shopeApp from '../Reducers/Index'


const store=createStore(shopeApp,applyMiddleware(thunkMiddleware));

export default store;