import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Feed } from 'components'
import * as feedActionCreators from 'redux/modules/feed'

class FeedContainer extends React.Component {

  propTypes: {
    newDucksAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    setAndHanleFeedListener: PropTypes.func.isRequired,
    resetNewDucksAvailable: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.setAndHandleFeedListener()
  }

  render () {
    const { newDucksAvailable, error, isFetching, resetNewDucksAvailable } = this.props

    return (
      <Feed
        newDucksAvailable={newDucksAvailable}
        error={error}
        isFetching={isFetching}
        resetNewDucksAvailable={resetNewDucksAvailable} />
    )
  }
}

function mapStateToProps ({feed}) {
  const { newDucksAvailable, error, isFetching } = feed
  return {
    newDucksAvailable,
    error,
    isFetching,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(feedActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
