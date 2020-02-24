import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import PatientTable from './PatientTable'
import Axios from 'axios'
import './App.css'
import SearchPatient from './SearchPatient'

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
      patient: {
        id: this.props.patient.id,
        patientid: this.props.patient.patientid,
        firstName: this.props.patient.firstname,
        lastName: this.props.patient.lastname,
        doctor: this.props.patient.doctor,
        insurance: this.props.patient.insurance,
        amountOwed: this.props.patient.amountowed,
        patientcharges: []
      }
    }).then(resp => {
      console.log(resp)
      this.props.setPatientList(resp.data)
    })
  }
  // addCharges = e => {
  //   Axios.post('/api/createCharges', {
  //     charges: {
  //       date: this.props.patient.date,
  //       charge: this.props.patient.charge,
  //       amountdue: this.props.patient.amountdue,
  //       amountpaid: this.props.patient.amountpaid,
  //       balance: this.props.patient.balance
  //     }
  //   }).then(resp => {
  //     console.log(resp)
  //     this.props.setChargeList(resp.data)
  //   })
  // }

  patientData = () => {
    if (this.props.patient.searchPatientList.length > 0) {
      console.log('Contents in Search Array Exist')
      return this.props.patient.searchPatientList
    }
    return this.props.patient.patients
  }

  addCharges = (i, obj) => {
    let tempArr = this.props.patient.patients[i].chargearr
    tempArr.push(obj)
    Axios.put('/api/updateCharges', {
      tempArr: tempArr,
      id: this.props.patients[i].id
    }).then(resp => {
      console.log(resp)
      this.props.setPatientList(resp.data)
    })
  }

  deletePatient = id => {
    console.log(id)
    Axios.delete(`/api/deletePatient/${id}`).then(resp => {
      console.log('deleted patient', resp)
      this.props.setPatientList(resp.data)
    })
  }

  render () {
    return (
      <div>
        <div className='inputForm'>
          <Input
            className='inputRows'
            type='text'
            placeholder='Patient ID'
            onChange={e => this.props.addPatientId(e)}
            value={this.props.patient.patientid}
          />
          <Input
            className='inputRows'
            type='text'
            placeholder='First Name'
            onChange={e => this.props.addFirstName(e)}
            value={this.props.patient.firstname}
          />
          <Input
            className='inputRows'
            type='text'
            placeholder='Last Name'
            onChange={e => this.props.addLastName(e)}
            value={this.props.patient.lastname}
          />
          <Input
            className='inputRows'
            type='text'
            placeholder='Doctor'
            onChange={e => this.props.addDoctor(e)}
            value={this.props.patient.doctor}
          />
          <Input
            className='inputRows'
            type='text'
            placeholder='Insurance'
            onChange={e => this.props.addInsurance(e)}
            value={this.props.patient.insurance}
          />
          <Input
            className='inputRows'
            type='text'
            placeholder='Amount Owed'
            onChange={e => this.props.addAmountOwed(e)}
            value={this.props.patient.amountowed}
          />

          <Button className='submitType' onClick={this.addPatient}>
            Add
          </Button>
          <SearchPatient />
        </div>

        {this.patientData().map(person => (
          <PatientTable
            key={person.id}
            id={person.id}
            patientid={person.patientid}
            firstname={person.firstname}
            lastname={person.lastname}
            doctor={person.doctor}
            insurance={person.insurance}
            amountowed={person.amountowed}
            person={person}
            onEditPatient={this.props.onEditPatient}
            
            onDelete={this.deletePatient}
            patientList={this.props.patient.patients}
            addCharges={this.addCharges}
          />
        ))}
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
  }, 
  setChargeList(arr) {
    dispatch({
      type: 'CHARGE_LIST',
      payload: arr
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
