import React, { Component } from 'react'
import { Modal, Icon } from 'antd'
import { connect } from 'react-redux'

class Exercises extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={() => this.props.setExerciseModal(true)}>
            <Icon type='folder' />
          </button>
        </div>
        <Modal
          onOk={() => this.props.setExerciseModal(false)}
          okText='Ok'
          title='Home Exercise Plans'
          onCancel={() => this.props.setExerciseModal(false)}
          visible={this.props.patient.setExerciseModal}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('State:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setExerciseModal (val) {
    dispatch({
      type: 'SET_EXERCISE_MODAL',
      payload: val
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exercises)
