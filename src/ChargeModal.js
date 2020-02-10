import React, { Component } from 'react'
import { Modal } from 'antd'
class ChargeModal extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <Modal
          okText='Save'
          title='Enter Charges'
          onCancel={this.props.showChargeModal(false)}
          visible={this.props.patient.showChargeModal}
        >
          <table>
            <tbody />
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
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChargeModal)
