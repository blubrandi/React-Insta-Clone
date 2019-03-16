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
              <div>
                <img src={props.post.imageUrl} alt="Post Banner" />
              </div>
              <div className="commentSection">
              <div className="commentSectionIcons">
                <div className="leftIcons">
                  <i class="far fa-heart"></i>
                  <i class="far fa-comment"></i>
                  <i class="fas fa-external-link-alt"></i>
                </div>
                <div className="rightIcon">
                  <i class="far fa-bookmark"></i>
                </div>
              </div>
              <div  className="postLikes">
                <p>
                  {props.post.likes} likes
                </p>
                </div>
                <div className="comments">
                <p>
                  {props.post.comments.map(comment => {
                    return (
                      <div>
                        <Comments comment={comment} />
                      </div>
                    )
                  })}
                </p>
                </div>
                <div className="addComment">
                  <input type="text" placeholder="Add Comment"></input>
                </div>
                </div>
            </div>
          </div>
    )   
}


export default PostContainer