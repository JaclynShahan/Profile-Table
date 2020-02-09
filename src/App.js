import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import PatientTable from './PatientTable'
import Axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount = () => {
    Axios.get('/api/getPatients').then(resp => {
      console.log('getPatients:', resp)
      this.props.setPatientList(resp.data)
    })
  }
  addPatient = e => {
    Axios.post('/api/createPatients', {
      id: this.props.patient.patient_id,
      firstName: this.props.patient.first_name,
      lastName: this.props.patient.last_name,
      doctor: this.props.patient.doctor,
      insurance: this.props.patient.insurance,
      amountOwed: this.props.patient.amount_owed
    }).then(resp => {
      console.log(resp)
      this.props.setPatientList(resp.data)
    })
  }

  render () {
    return (
      <div>
        <div>
          <Input
            type='text'
            placeholder='Patient ID'
            onChange={e => this.props.addPatientId(e)}
            value={this.props.patient.patientId}
          />
          <Input
            type='text'
            placeholder='First Name'
            onChange={e => this.props.addFirstName(e)}
            value={this.props.patient.firstName}
          />
          <Input
            type='text'
            placeholder='Last Name'
            onChange={e => this.props.addLastName(e)}
            value={this.props.patient.lastName}
          />
          <Input
            type='text'
            placeholder='Doctor'
            onChange={e => this.props.addDoctor(e)}
            value={this.props.patient.doctor}
          />
          <Input
            type='text'
            placeholder='Insurance'
            onChange={e => this.props.addInsurance(e)}
            value={this.props.patient.insurance}
          />
          <Input
            type='text'
            placeholder='Amount Owed'
            onChange={e => this.props.addAmountOwed(e)}
            value={this.props.patient.amountOwed}
          />
          <Button onClick={this.addPatient}>Add</Button>
        </div>
        <PatientTable
          onDelete={this.onDeletePatient}
          patientList={this.props.patient.patients}
        />
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
  },
  setPatientList (arr) {
    dispatch({
      type: 'PATIENT_LIST',
      payload: arr
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
