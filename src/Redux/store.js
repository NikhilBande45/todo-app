import { createStore } from 'redux'

// import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducers'

const store = createStore(todoReducer)

export default store;
