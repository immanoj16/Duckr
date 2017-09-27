import React from 'react'
import { color } from './styles.css'

class MainContainer extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
