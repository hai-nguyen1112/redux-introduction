import React, {Component} from 'react'
import './App.css'
import Timer from './components/Timer'
import Text from './components/Text'
import Picture from './containers/Picture'

class App extends Component {
  render() {
    return (
      <div className="container" id="app-container">
        <Timer />
        <Text />
        <Picture />
      </div>
    )
  }
}

export default App
