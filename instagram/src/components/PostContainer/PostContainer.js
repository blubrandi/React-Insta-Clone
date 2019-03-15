import React from 'react'

import './PostContainer.css'
import Comments from '../CommentSection/CommentSection'


const PostContainer = props => {
    
    return (
        <div className="postContainer">
            <div>
                <div className="postUserInfo">
                <div>
                    <img className="userAvatar" src={props.post.thumbnailUrl} alt="User Thumbnail" />
                    </div>
                    <div className="postUserName">
                    {props.post.username}
                    </div>
                </div>
            <img src={props.post.imageUrl} alt="Post Banner" />
            <p>
            {props.post.likes} likes
            </p>
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