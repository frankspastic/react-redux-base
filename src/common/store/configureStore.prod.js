import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { routerMiddleware } from 'react-router-redux'
import history from '../helpers/history'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, routerMiddleware(history))
)

export default configureStore
