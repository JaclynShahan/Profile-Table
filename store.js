import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import patient from './reducers/patient'

export default createStore(
  combineReducers({
    patient
  }),
  applyMiddleware(promiseMiddleware)
)
