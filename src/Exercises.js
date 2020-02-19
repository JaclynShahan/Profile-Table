import React, { Component } from 'react'
import { Modal, Icon } from 'antd'
import { connect } from 'react-redux'
import './Exercises.css'

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
        >
          <div className='rows'>
            <div className='links'>
              <a href='' target='_blank'>
                Lumbar
              </a>
            </div>
            <div className='links'>
              <a href='' target='_blank'>
                Cervical
              </a>
            </div>
            <div className='links'>
              <a href='' target='_blank'>
                Shoulders/Biceps
              </a>
            </div>
            <div className='links'>
              <a href='' target='_blank'>
                Arms/Elbows
              </a>
            </div>
            <div className='links'>
              <a href='' target='_blank'>
                Wrists/Hands
              </a>
            </div>
          </div>
          <div className='secondRow'>
            <div className='links'>
              <a href='' target='_blank'>
                Hips
              </a>
            </div>
            <div className='links'>
              <a href='' target='_blank'>
                Knees
              </a>
            </div>
            <div className='links'>
              <a href='' target='_blank'>
                Ankles
              </a>
            </div>
            <div className='links'>
              <a href='' target='_blank'>
                Feet
              </a>
            </div>
          </div>
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
