import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from './store'
import router from './router'
import { connect } from 'react-redux'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Icon, Button } from 'antd'
import Login from './Login/Login'
import Home from './Components/Home/Home'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  logoutUser () {
    Axios.put('/api/logout').then(resp => {
      console.log(resp, 'logout user')
      this.props.setUsername()
      this.props.setPassword()
      this.props.setAuthentication(false)
    })
  }

  render () {
    return (
      <div>
        <div>
          {this.props.login.authentication ? (
            <Button onClick={() => this.logoutUser()}>Logout</Button>
          ) : (
            <Link to='login'>
              Login
              <Icon type='user' />{' '}
            </Link>
          )}
          <Link to='/home'>Home</Link>
        </div>
        {router}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('App State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setUsername () {
    dispatch({
      type: 'SET_USERNAME',
      payload: ''
    })
  },
  setPassword () {
    dispatch({
      type: 'SET_PASSWORD',
      payload: ''
    })
  },
  setAuthentication (val) {
    dispatch({
      type: 'SET_AUTHENTICATION',
      payload: val
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
