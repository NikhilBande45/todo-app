import { legacy_createStore } from 'redux'

// import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducers'

const store = legacy_createStore(todoReducer)

export default store;
