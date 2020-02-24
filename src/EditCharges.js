import React, { Component } from 'react'
import Axios from 'axios'
import { Modal, Button, Icon, Input } from 'antd'
import { connect } from 'react-redux'


class EditCharges extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const {
      date,
      charge,
      amountdue,
      amountpaid,
      balance
    } = this.props.editCharges
    return (
      <div>
        <div>
          <Button onClick={() => this.props.setEditChargeModal(true)}>
            <Icon type='edit' />
          </Button>
        </div>
        <Modal
          okText=''
          title='Edit Charges'
          onCancel={() => this.props.setEditChargeModal(false)}
          visible={this.props.patient.setEditChargeModal}
          footer={[]}
        >
          <span>Edit Date:</span>
          <Input
            placeholder={this.props.patient.date}
            onChange={e => this.props.setEditDate(e)}
            value={this.props.editCharges.date}
          />
          <span>Edit Charge:</span>
          <Input
            placholder={this.props.patient.charge}
            onChange={e => this.props.setEditCharge(e)}
            value={this.props.editCharges.charge}
          />
          <span>Edit Amount Due:</span>
          <Input
            placeholder={this.props.patient.amountdue}
            onChange={e => this.props.setEditAmountDue(e)}
            value={this.props.editCharges.amountdue}
          />
          <span>Edit Amount Paid:</span>
          <Input
            placeholder={this.props.patient.amountpaid}
            onChange={e => this.props.setEditAmountPaid(e)}
            value={this.props.editCharges.amountpaid}
          />
          <span>Edit Balance:</span>
          <Input
            placeholder={this.props.patient.balance}
            onChange={e => this.props.setEditBalance(e)}
            value={this.props.editCharges.balance}
          />
          <Button onClick={() => this.props.setEditChargeModal(false)}>
            Cancel
          </Button>
          <Button
            onClick={() =>
              this.props.addCharges(
                date,
                charge,
                amountdue,
                amountpaid,
                balance
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
  console.log('State for ChargeEdit:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setEditDate (e) {
    dispatch({
      type: 'EDIT_DATE',
      payload: e.target.value
    })
  },
  setEditCharge (e) {
    dispatch({
      type: 'EDIT_CHARGE',
      payload: e.target.value
    })
  },
  setEditAmountDue (e) {
    dispatch({
      type: 'EDIT_AMOUNT_DUE',
      payload: e.target.value
    })
  },
  setEditAmountPaid (e) {
    dispatch({
      type: 'EDIT_AMOUNT_PAID',
      payload: e.target.value
    })
  },
  setEditBalance (e) {
    dispatch({
      type: 'EDIT_BALANCE',
      payload: e.target.value
    })
  },
  setEditChargeModal (val) {
    dispatch({
      type: 'SET_EDIT_CHARGE_MODAL',
      payload: val
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCharges)
