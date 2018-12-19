import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/rootReducer'
import DevTools from '../containers/DevTools'
import { routerMiddleware } from 'react-router-redux'
import history from '../helpers/history'

const configureStore = preloadedState => {  

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger(), routerMiddleware(history)),
      DevTools.instrument()
    )
  )

  window.store = store

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
