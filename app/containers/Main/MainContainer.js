import React from 'react'
import { connect } from 'react-redux'

import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'

class MainContainer extends React.Component {

  propTypes: {
    isAuthed: PropTypes.bool.isRequired
  }

  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isAuthed: state.isAuthed
  }
}

export default connect(mapStateToProps)(MainContainer)
