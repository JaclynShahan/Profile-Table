import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Login from './Login/Login'
import Home from './Components/Home/Home'

export default (
  <Provider store={store}>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/home' component={Home} />
    </Switch>
  </Provider>
)
