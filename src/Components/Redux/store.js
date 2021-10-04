import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default createStore(reducer, composedEnhancer)