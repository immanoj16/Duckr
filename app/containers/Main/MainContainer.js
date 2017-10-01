import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Navigation } from 'components'
import { container, innerContainer } from './styles.css'
import * as userActionCreators from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'
import * as usersLikesActionCreators from 'redux/modules/usersLikes'

class MainContainer extends React.Component {

  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    removeFetchingUser: PropTypes.func.isRequired,
    setUsersLikes: PropTypes.func.isRequired,
  }

  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        this.props.setUsersLikes()
        if (this.props.location.pathname === '/') {
          this.context.router.replace('feed')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }

  render () {
    return this.props.isFetching === true
      ? null
      : <div className={container}>
          <Navigation isAuthed={this.props.isAuthed} />
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
  }
}

MainContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps ({users}) {
  return {
    isAuthed: users.isAuthed,
    isFetching: users.isFetching,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({...userActionCreators, ...usersLikesActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
