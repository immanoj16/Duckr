import React, { PropTypes } from 'react'
import { connect } from 'redux'

import { Feed } from 'components'

class FeedContainer extends React.Component {

  propTypes: {
    newDucksAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    // set a listener to ducks
  }

  render () {
    const { newDucksAvailable, error, isFetching } = this.props

    return (
      <Feed
        newDucksAvailable={newDucksAvailable}
        error={error}
        isFetching={isFetching} />
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

export default connect(mapStateToProps)(FeedContainer);
