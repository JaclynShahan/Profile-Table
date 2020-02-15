import React, { Component } from 'react'
import { Modal, Button, Icon, Input } from 'antd'
import { connect } from 'react-redux'

class ChargeModal extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const modalRows = this.props.chargeInfo.map((day, chargeIndex) => {
      return (
        <tr key={chargeIndex}>
          <td>
            <button>
              <Icon type='edit' />
            </button>
          </td>
          <td>
            <button>
              <Icon type='delete' />
            </button>
          </td>
          <td>{day.date}</td>
          <td>{day.charges}</td>
          <td>{day.amountdue}</td>
          <td>{day.amountpaid}</td>
          <td>{day.balance}</td>
        </tr>
      )
    })
    return (
      <div>
        <button onClick={() => this.props.showChargeModal(true)}>
          <Icon type='dollar' />
        </button>
        <Modal
          okText='Save'
          title='Enter Charges'
          onCancel={this.props.showChargeModal(false)}
          visible={this.props.patient.showChargeModal}
        >
          <table>
            <tbody>
              <tr>
                <th>Edit</th>
                <th>Delete</th>
                <th>Date:</th>
                <th>Charges:</th>
                <th>Amount Due:</th>
                <th>Amount Paid:</th>
                <th>Balance:</th>
              </tr>
              <tr>
                <td>
                  <Button>
                    <Icon type='edit' />
                  </Button>
                </td>
                <td>
                  <Button>
                    <Icon type='delete' />
                  </Button>
                </td>
                <td>
                  <Input
                    type='text'
                    onChange={e => this.props.addChargeDate(e)}
                    value={this.props.patient.date}
                  />
                </td>
                <td>
                  <Input
                    type='text'
                    onChange={e => this.props.addNewCharge(e)}
                    value={this.props.patient.charge}
                  />
                </td>
                <td>
                  <Input
                    type='text'
                    onChange={e => this.props.addAmountOwed(e)}
                    value={this.props.patient.amountowed}
                  />
                </td>
                <td>
                  <Input
                    type='text'
                    onChange={e => this.props.addAmountPaid(e)}
                    value={this.props.patient.amountpaid}
                  />
                </td>
                <td>
                  <Input
                    type='text'
                    onChange={e => this.props.addNewBalance(e)}
                    value={this.props.patient.balance}
                  />
                </td>
              </tr>
              {modalRows}
            </tbody>
          </table>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  showChargeModal (val) {
    dispatch({
      type: 'SHOW_CHARGE_MODAL',
      payload: val
    })
  },
  addChargeDate (e) {
    dispatch({
      type: 'CHARGE_DATE',
      payload: e.target.value
    })
  },
  addNewCharge (e) {
    dispatch({
      type: 'ADD_CHARGE',
      payload: e.target.value
    })
  },
  addAmountPaid (e) {
    dispatch({
      type: 'AMOUNT_PAID',
      payload: e.target.value
    })
  },
  addAmountOwed (e) {
    dispatch({
      type: 'AMOUNT_OWED',
      payload: e.target.value
    })
  },
  addNewBalance (e) {
    dispatch({
      type: 'ADD_BALANCE',
      payload: e.target.value
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChargeModal)
