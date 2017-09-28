import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Logout } from 'components'
import { logoutAndUnauth } from 'redux/modules/users'

class LogoutContainer extends React.Component {

  propTypes: {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(logoutAndUnauth())
  }

  render () {
    return (
      <Logout />
    )
  }
}

export default connect()(LogoutContainer);
