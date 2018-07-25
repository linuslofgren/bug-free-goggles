import reducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

export default createStore(reducer, applyMiddleware(thunkMiddleware))
