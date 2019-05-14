import React from 'react'
import {clickedTheAddButton, clickedTheSubtractButton} from '../redux/actions'
import {connect} from 'react-redux'

const Timer = props => {
  return (
    <div className="container" id="timer">
      <h1>{props.timer}</h1>
      <button onClick={props.handleAddButton}>Add</button>
      <button onClick={props.handleSubtractButton}>Subtract</button>
    </div>
  )
}

const mapStateToProps = state => ({
  timer: state.timer
})

const mapDispatchToProps = dispatch => {
  return {
    handleAddButton: () => dispatch(clickedTheAddButton()),
    handleSubtractButton: () => dispatch(clickedTheSubtractButton())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
