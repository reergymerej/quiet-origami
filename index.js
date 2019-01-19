import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// initial state
console.log(store.getState())

store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())

store.dispatch({ type: 'DECREMENT' })
console.log(store.getState())

// then run the saga
sagaMiddleware.run(mySaga)
