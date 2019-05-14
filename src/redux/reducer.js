import {combineReducers} from 'redux'

const timerReducer = (oldState=0, action) => {
  switch (action.type) {
    case 'ADD_BUTTON_WAS_CLICKED':
      return oldState + 1
    case 'SUBTRACT_BUTTON_WAS_CLICKED':
      return oldState - 1
    default:
      return oldState
  }
}

const textReducer = (oldState="", action) => {
  switch(action.type) {
    case 'TEXT_WAS_SUBMITTED':
      return action.payload
    default:
      return oldState
  }
}

const inputTextReducer = (oldState="", action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_TEXT':
      return action.payload
    default:
      return oldState
  }
}

const fetchedPictureReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_PICTURE":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  timer: timerReducer,
  text: textReducer,
  inputText: inputTextReducer,
  picture: fetchedPictureReducer
})

export default rootReducer
