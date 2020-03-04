import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'
import Axios from 'axios'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      user: {}
    }
  }

  userAuthorization = () => {
    Axios.post(`/api/verifyUser`, {
      username: this.props.login.username,
      password: this.props.login.password
    }).then(resp => {
      console.log(resp.data)
      this.props.setAuthentication(resp.data)
    })
  }
  render () {
    return (
      <div>
        <form>
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
          <Button onClick={() => this.userAuthorization()}>Submit</Button>
        </form>
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
