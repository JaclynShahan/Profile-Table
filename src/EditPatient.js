import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Input, Button, Icon } from 'antd'

class EditPatient extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const {
      patientid,
      firstname,
      lastname,
      doctor,
      insurance,
      amountowed
    } = this.props.editPatient
    return (
      <div>
        <div>
            <button onClick={() => this.props.setEditModal(true)}>
              <Icon type='edit' />
            </button>
        </div>
       <Modal
              okText=''
              title='Edit Patient'
              onCancel={() => this.props.setEditModal(false)}
              visible={this.props.patient.setEditModal}
              footer={[]}
            >
        <span>Edit Patient ID:</span>
        <Input
          placeholder={this.props.patient.patientid}
          onChange={e => this.props.setEditPatientId(e)}
          value={this.props.editPatient.patientid}
        />
        <span>Edit First Name:</span>
        <Input
          placeholder={this.props.patient.firstname}
          onChange={e => this.props.setEditFirstName(e)}
          value={this.props.editPatient.firstname}
        />
        <span>Edit Last Name:</span>
        <Input
          placeholder={this.props.patient.lastname}
          onChange={e => this.props.setEditLastName(e)}
          value={this.props.editPatient.lastname}
        />
        <span>Edit Doctor:</span>
        <Input
          placeholder={this.props.editPatient.doctor}
          onChange={e => this.props.setEditDoctor(e)}
          value={this.props.editPatient.doctor}
        />
        <span>Edit Insurance:</span>
        <Input
          placeholder={this.props.patient.insurance}
          onChange={e => this.props.setEditInsurance(e)}
          value={this.props.editPatient.insurance}
        />
        <span>Edit Amount Owed:</span>
        <Input
          placeholder={this.props.patient.amountowed}
          onChange={e => this.props.setEditAmountOwed(e)}
          value={this.props.editPatient.amountowed}
        />
        <Button onClick={() => this.props.setEditModal(false)}>Cancel</Button>
        <Button
          onClick={() =>
            this.props.addPatient(
              patientid,
              firstname,
              lastname,
              doctor,
              insurance,
              amountowed
            )
          }
        >
          Save
        </Button>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setEditPatientId (e) {
    dispatch({
      type: 'EDIT_PATIENT_ID',
      payload: e.target.value
    })
  },
  setEditFirstName (e) {
    dispatch({
      type: 'EDIT_FIRST_NAME',
      payload: e.target.value
    })
  },
  setEditLastName (e) {
    dispatch({
      type: 'EDIT_LAST_NAME',
      payload: e.target.value
    })
  },
  setEditDoctor (e) {
    dispatch({
      type: 'EDIT_DOCTOR',
      payload: e.target.value
    })
  },
  setEditInsurance (e) {
    dispatch({
      type: 'EDIT_INSURANCE',
      payload: e.target.value
    })
  },
  setEditAmountOwed (e) {
    dispatch({
      type: 'EDIT_AMOUNT_OWED',
      payload: e.target.value
    })
  },
  setEditModal (val) {
    dispatch({
      type: 'SET_EDIT_MODAL',
      payload: val
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPatient)
