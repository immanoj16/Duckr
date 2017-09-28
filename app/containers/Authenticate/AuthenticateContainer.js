import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Authenticate } from 'components'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends React.Component {

  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  }

  handleAuth() {
    this.props.fetchAndHandleAuthedUser()
  }

  render () {
    console.log('Is Fetching', this.props.isFetching);
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth.bind(this)} />
    )
  }
}

function mapStateToProps (state) {
  console.log(state);
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer);
