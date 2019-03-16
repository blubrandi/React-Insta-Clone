import React from 'react'

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

export default Comments