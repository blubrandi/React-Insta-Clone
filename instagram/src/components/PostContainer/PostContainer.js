import React from 'react'

import Comments from '../CommentSection/CommentSection'


const PostContainer = props => {
    
    return (
        <div className="postContainer">
            <div>
            {props.post.username}
            <img src={props.post.imageUrl} alt="Post Banner" />
            </div>
            <div>
            <p>{props.post.comments.map(comment => {
              return (
                <div><Comments comment={comment} /></div>
              )
            })}</p>
          </div>
            
        </div>
    )   
}


export default PostContainer