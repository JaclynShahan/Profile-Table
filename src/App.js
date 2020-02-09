import React, { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'net'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <div>
          <Input
            type='text'
            placeholder='Patient ID'
            onChange={e => this.props.addPatientId(e)}
          />
          <Input
            type='text'
            placeholder='First Name'
            onChange={e => this.props.addFirstName(e)}
          />
          <Input
            type='text'
            placeholder='Last Name'
            onChange={e => this.props.addLastName(e)}
          />
          <Input
            type='text'
            placeholder='Doctor'
            onChange={e => this.props.addDoctor(e)}
          />
          <Input
            type='text'
            placeholder='Insurance'
            onChange={e => this.props.addInsurance(e)}
          />
          <Input
            type='text'
            placeholder='Amount Owed'
            onChange={e => this.props.addAmountOwed(e)}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  addPatientId (e) {
    dispatch({
      type: 'ADD_PATIENT_ID',
      payload: e.target.value
    })
  },
  addFirstName (e) {
    dispatch({
      type: 'ADD_FIRST_NAME',
      payload: e.target.value
    })
  },
  addLastName (e) {
    dispatch({
      type: 'ADD_LAST_NAME',
      payload: e.target.value
    })
  },
  addInsurance (e) {
    dispatch({
      type: 'ADD_INSURANCE',
      payload: e.target.value
    })
  },
  addAmountOwed (e) {
    dispatch({
      type: 'ADD_AMOUNT_OWED',
      payload: e.target.value
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
