import React, { Component } from 'react'
import { Modal, Button, Input } from 'antd'
import { connect } from 'react-redux'
import Axios from 'axios'

class CreateUser extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return <div />
  }
}

const mapStateToProps = state => {
  console.log('Create User State:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setNewUsername (e) {
    dispatch({
      type: 'SET_NEW_USERNAME',
      payload: e.target.value
    })
  },
  setNewPassword (e) {
    dispatch({
      type: 'SET_NEW_PASSWORD',
      payload: e.target.value
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser)
