import React from 'react'
import PropTypes from 'prop-types'

import './CommentSection.css'

const Comments = props => {
    return (
        <div className="postComment">
            <div className="postCommentUsername">
                {props.comment.username} <span className="commentText">{props.comment.text}</span>
            </div>
       </div>
    )
}


Comments.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired
      })
    )
  }

  Comments.defautProps = {
      comment: []
  }

export default Comments