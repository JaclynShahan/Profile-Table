import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'

class Login extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <Input
          placeholder='Enter Username...'
          type='text'
          value={this.props.login.username}
          onChange={e => this.props.setUsername(e)}
        />
        <Input
          placeholder='Enter Password...'
          type='password'
          value={this.props.login.password}
          onChange={e => this.props.setPassword(e)}
        />
        <Button>Submit</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Login State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setUsername (e) {
    dispatch({
      type: 'SET_USERNAME',
      payload: e.target.value
    })
  },
  setPassword (e) {
    dispatch({
      type: 'SET_PASSWORD',
      payload: e.target.value
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
)(Login)
