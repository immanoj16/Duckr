import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { DuckDetails } from 'components'
import * as duckActionCreators from 'redux/modules/ducks'
import * as likeCountActionCreators from 'redux/modules/likeCount'
import * as repliesActionCreators from 'redux/modules/replies'

class DuckDetailsContainer extends React.Component {

  propTypes: {
    authedUser: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckAlreadyFetched: PropTypes.bool.isRequired,
    removeFetching: PropTypes.func.isRequired,
    fetchAndHandleDuck: PropTypes.func.isRequired,
    initLikeFetch: PropTypes.func.isRequired,
    addAndHandleReply: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.initLikeFetch(this.props.duckId)
    if (this.props.duckAlreadyFetched === false) {
      // fetch duck and save to store
      this.props.fetchAndHandleDuck(this.props.duckId)
    } else {
      // set isFetching to false
      this.props.removeFetching()
    }
  }

  render () {
    const { authedUser, duckId, isFetching, error } = this.props
    return (
      <DuckDetails
        addAndHandleReply={this.props.addAndHandleReply}
        authedUser={authedUser}
        duckId={duckId}
        isFetching={isFetching}
        error={error} />
    )
  }
}

function mapStateToProps ({ducks, likeCount, users}, props) {
  return {
    isFetching: ducks.isFetching || likeCount.isFetching,
    error: ducks.error,
    authedUser: users[users.authedId].info,
    duckId: props.routeParams.duckId,
    duckAlreadyFetched: !!ducks[props.routeParams.duckId]
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...duckActionCreators,
    ...likeCountActionCreators,
    ...repliesActionCreators,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckDetailsContainer)
