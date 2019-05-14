import React from 'react'
import {submittedTheText, changeInputText} from '../redux/actions'
import {connect} from 'react-redux'

const Text = props => {
  return (
    <div>
      <h1>{props.text}</h1>
      <form onSubmit={e => {props.handleTextSubmit(e, props.inputText); props.handleTextChange("")}}>
        <input type="text" label="Text" value={props.inputText} onChange={e => props.handleTextChange(e.target.value)} name="text" placeholder="Enter a random text..."/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  text: state.text,
  inputText: state.inputText
})

const mapDispatchToProps = dispatch => {
  return {
    handleTextChange: text => dispatch(changeInputText(text)),
    handleTextSubmit: (e, text) => dispatch(submittedTheText(e, text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Text)
