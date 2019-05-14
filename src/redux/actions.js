function clickedTheAddButton() {
  return {
    type: "ADD_BUTTON_WAS_CLICKED"
  }
}

function clickedTheSubtractButton() {
  return {
    type: "SUBTRACT_BUTTON_WAS_CLICKED"
  }
}

function submittedTheText(e, text) {
  e.preventDefault()
  return {
    type: "TEXT_WAS_SUBMITTED",
    payload: text
  }
}

function changeInputText(text) {
  return {
    type: "CHANGE_INPUT_TEXT",
    payload: text
  }
}

function fetchPictureWithThunk() {
  return dispatch => {
    fetch('https://undercooked-backend.herokuapp.com/api/v1/users/')
    .then(res => res.json())
    .then(pictures => {
      dispatch(fetchedPictureWithThunk(pictures))
    })
  }
}

function fetchedPictureWithThunk(pictures) {
  return {
    type: "FETCHED_PICTURE",
    payload: pictures
  }
}

export {clickedTheAddButton, clickedTheSubtractButton, submittedTheText, changeInputText, fetchPictureWithThunk}
