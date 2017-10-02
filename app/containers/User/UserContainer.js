import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { User } from 'components'

class UserContainer extends React.Component {
  render () {
    const { noUser, name, isFetching, error, duckIds } = this.props
    return (
      <User
        noUser={noUser}
        name={name}
        isFetching={isFetching}
        error={error}
        duckIds={duckIds} />
    )
  }
}

UserContainer.propTypes = {
  noUser: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  duckIds: PropTypes.array.isRequired,
}

function mapStateToProps ({users, usersDucks}, props) {
  const specificUsersDucks = usersDucks[props.routeParams.uid]
  const user = users[props.routeParams.uid]
  const noUser = typeof user === 'undefined'
  return {
    noUser,
    isFetching: users.isFetching || usersDucks.isFetching,
    error: users.error || usersDucks.error,
    duckIds: specificUsersDucks ? specificUsersDucks.duckIds : []
  }
}

export default connect(mapStateToProps)(UserContainer)
