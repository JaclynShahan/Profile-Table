import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import patient from './reducers/patient'
import editPatient from './reducers/editPatient'
import editCharges from './reducers/editCharges'

export default createStore(
  combineReducers({
    patient, editPatient, editCharges
  }),
  applyMiddleware(promiseMiddleware)
)
