import React, { Component } from 'react'
import { Icon, Modal } from 'antd'
import { connect } from 'react-redux'
import ChargeModal from './ChargeModal'
import Axios from 'axios'
import EditPatient from './EditPatient'
import Exercises from './Exercises'

class PatientTable extends Component {
  constructor () {
    super()
    this.state = {}
  }
  openEditModal = () => {
    const { person } = this.props
    this.props.setInspectedPatient(person)
    this.props.setEditModal(true)
  }
  onEditPatient = (pid, fn, ln, dr, ins, amt) => {
    Axios.put('/api/updatePatient', {
      patientid: pid,
      firstname: fn,
      lastname: ln,
      doctor: dr,
      insurance: ins,
      amountowed: amt
    }).then(resp => {
      console.log('Updated Patient:', resp)
      this.props.setEditModal(false)
      this.props.setPatientList(resp.data)
    })
  }
  render () {
    const patientRows = this.props.patient.patients.map((person, indexPoint) => {
      return (
        <tr key={indexPoint}>
          <td>
            <button onClick={() => this.props.onDeletePatient(person.id)}>
              <Icon type='delete' />
            </button>
          </td>
          <td>
            <EditPatient onSave={this.onEditPatient} />
          
            
        
          </td>
          <td>{person.patientid}</td>
          <td>{person.firstname}</td>
          <td>{person.lastname}</td>
          <td>{person.doctor}</td>
          <td>{person.insurance}</td>
          <td>{person.amountowed}</td>
          <td>
            <ChargeModal
              patientIndex={indexPoint}
              chargeInfo={this.props.patient.chargearr}
              addCharges={this.props.addCharges}
              onEditCharges={this.props.onEditCharges}
            />
          </td>
          <td>
           <Exercises />
          </td>
        </tr>
      )
    })
    return (
      <table className='patientTable'>
        <tbody>
          <tr>
            <th>Delete</th>
            <th>Edit</th>
            <th>Patient ID:</th>
            <th>First Name:</th>
            <th>Last Name:</th>
            <th>Doctor:</th>
            <th>Insurance:</th>
            <th>Amount Owed:</th>
            <th>Charges</th>
            <th>Exercises</th>
          </tr>
        {patientRows}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  showChargeModal (val) {
    dispatch({
      type: 'SHOW_CHARGE_MODAL',
      payload: val
    })
  },
  showChargeArr (arr) {
    dispatch({
      type: 'PATIENT_CHARGES',
      payload: arr
    })
  },
  setEditModal (val) {
    dispatch({
      type: 'SET_EDIT_MODAL',
      payload: val
    })
  },
  setPatientList (arr) {
    dispatch({
      type: 'PATIENT_LIST',
      payload: arr
    })
  },
  setInspectedPatient (person) {
    dispatch({
      type: 'SET_INSPECTED_PATIENT',
      payload: person
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientTable)
