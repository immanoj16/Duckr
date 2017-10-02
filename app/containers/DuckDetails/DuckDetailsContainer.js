import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { DuckDetails } from 'components'

class DuckDetailsContainer extends React.Component {

  propTypes: {
    authedUser: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }

  render () {
    const { authedUser, duckId, isFetching, error } = this.props

    return (
      <DuckDetails
        authedUser={authedUser}
        duckId={duckId}
        isFetching={isFetching}
        error={error} />
    )
  }
}

function mapStateToProps () {
  return
}

export default connect(mapStateToProps)(DuckDetailsContainer)
