import React from 'react'

import './CommentSection.css'

const Comments = props => {
    console.log('hello')
    return (
        <div className="postComment">
            <div className="postCommentUsername">
                {props.comment.username}
            </div>
            <div className="postCommentText">
                {props.comment.text}
            </div>
       </div>
    )
}

export default Comments