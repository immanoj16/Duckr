import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Duck } from 'components'

const { func, object, bool, number } = PropTypes

class DuckContainer extends React.Component {

  propTypes: {
    duck: object.isRequired,
    numberOfLikes: number,
    isLiked: bool.isRequired,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    handleDeleteLike: func.isRequired,
    addAndHandleLike: func.isRequired,
  }

  getDefaultProps () {
    return {
      hideReplyBtn: false,
      hideLikeCount: true,
    }
  }

  render () {
    return (
      <Duck />
    )
  }
}

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

export default connect(mapStateToProps)(DuckContainer)
