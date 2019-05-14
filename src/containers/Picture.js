import React, {Component} from 'react'
import {fetchPictureWithThunk} from '../redux/actions'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'

const mapStateToProps = state => ({
  picture: state.picture
})

const mapDispatchToProps = dispatch => {
  return {
    makeFetchCall: () => dispatch(fetchPictureWithThunk())
  }
}

class Picture extends Component {

  componentDidMount() {
    this.props.makeFetchCall()
  }

  render() {
    return (
      <div>
        {
          isEmpty(this.props.picture)
          ?
          null
          :
          <img src={this.props.picture[30].avatar} alt=""/>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Picture)
