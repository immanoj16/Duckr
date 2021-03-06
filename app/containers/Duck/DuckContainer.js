import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Duck } from 'components'
import * as usersLikesActions from 'redux/modules/usersLikes'

class DuckContainer extends React.Component {

  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  }

  handleClick (e) {
    e.stopPropagation()
    this.context.router.push('/duckDetail/' + this.props.duck.duckId)
  }

  render () {
    return (
      <Duck
        goToProfile={this.goToProfile.bind(this)}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick.bind(this)}
        {...this.props} />
    )
  }
}

DuckContainer.propTypes =  {
  duck: PropTypes.object.isRequired,
  numberOfLikes: PropTypes.number,
  isLiked: PropTypes.bool.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  hideReplyBtn: PropTypes.bool.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  addAndHandleLike: PropTypes.func.isRequired,
}

DuckContainer.defaultProps = {
  hideReplyBtn: false,
  hideLikeCount: true,
}

DuckContainer.contextTypes = {
  router: PropTypes.object.isRequired
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersLikesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckContainer)
