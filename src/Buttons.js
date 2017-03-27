import React from 'react'

class Buttons extends React.Component {
  render () {
    return <button className='main-button' onClick={this.props.onClick}>{this.props.text}</button>
  }
}

export default Buttons
