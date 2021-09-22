import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
//import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

//export default createStore(reducer, applyMiddleware(thunk))
export default createStore(reducer, composedEnhancer)