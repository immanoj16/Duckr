import React, { PropTypes } from 'react'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'

import { formatTimestamp } from 'helpers/utils'
import {
  duckContainer, contentContainer, avatar, actionContainer,
  header, text, likeReplyContainer, icon, likedIcon, author,
} from './styles.css'


const Duck = (props) => {

  const { duck, isLiked, handleDeleteLike, addAndHandleLike, hideLikeCount, hideReplyBtn, onClick, numberOfLikes, goToProfile } = props

  const starIcon = isLiked === true ? likedIcon : icon
  const starFn = isLiked === true ? handleDeleteLike : addAndHandleLike

  return (
    <div
      className={duckContainer}
      style={{cursor: hideReplyBtn === true ? 'default' : 'pointer'}}
      onClick={onClick}>
        <img src={duck.avatar} className={avatar} />
        <div className={contentContainer}>
          <div className={header}>
            <div onClick={goToProfile} className={author}>{duck.name}</div>
            <div>{formatTimestamp(duck.timestamp)}</div>
          </div>
          <div className={text}>{duck.text}</div>
          <div className={likeReplyContainer}>
            {hideReplyBtn === true
              ? null
              : <Reply className={icon} />}
            <div className={actionContainer}>
              <Star className={starIcon} onClick={(e) => starFn(duck.duckId, e)} />
              {hideLikeCount === true ? null : <div>{numberOfLikes}</div>}
            </div>
          </div>
        </div>
    </div>
  )
}

Duck.propTypes = {
  duck: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    duckId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    uid: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
  isLiked: PropTypes.bool.isRequired,
  addAndHandleLike: PropTypes.func.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  numberOfLikes: PropTypes.number,
  hideReplyBtn: PropTypes.bool.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  goToProfile: PropTypes.func.isRequired,
}

export default Duck
