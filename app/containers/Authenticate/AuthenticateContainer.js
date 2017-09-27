import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Authenticate } from 'components'
import auth from 'helpers/auth'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends React.Component {

  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchingUser: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    fetchingUserFailure: PropTypes.func.isRequired,
  }

  handleAuth() {
    this.props.fetchingUser()
    auth().then((user) => {
      this.props.fetchingUserSuccess(user.uid, user, Date.now())
      this.props.authUser(user.uid)

    })
    .catch((error) => this.props.fetchingUserFailure(error))
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
