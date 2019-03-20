import React from 'react'
import PropTypes from 'prop-types'

import './PostContainer.css'
import Comments from '../CommentSection/CommentSection'


class PostContainer extends React.Component {
   constructor(props) {
    console.log(props.post.comments)
    super(props)
    this.state = {
      comments: this.props.post.comments,
      comment: ''
    }
  }

handleChanges = event => {
  console.log(event.target.value)
  this.setState({
    [event.target.name]: [event.target.value]
  })
}

addNewComment = event => {
  event.preventDefault()
    const newComment = {username: 'brandi', text: this.state.comment}
    this.setState( prevState => {
      return {
      comments: [...this.state.comments, newComment],
      comment: ""
      }
    })
}

    render() {
      console.log(this.state)
      return (
          <div className="postContainer">
            <div>
                  <div className="postUserInfo">
                    <div>
                        <img className="userAvatar" src={this.props.post.thumbnailUrl} alt="User Thumbnail" />
                    </div>
                  <div className="postUserName">
                    {this.props.post.username}
                  </div>
                </div>
                <div>
                  <img src={this.props.post.imageUrl} alt="Post Banner" />
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
                    {this.props.post.likes} likes
                  </p>
                  </div>
                  <div className="comments">
                  <p>
                    {this.state.comments.map(comment => {
                      return (
                        <div>
                          <Comments comment={comment} />
                        </div>
                      )
                    })}
                  </p>
                  </div>
                  <div className="addComment">
                    <form onSubmit={this.addNewComment}>
                      <input type="text" placeholder="Add Comment" name="comment" onChange={this.handleChanges} value={this.state.comment}/>
                    </form>
                  </div>
                  </div>
              </div>
            </div>
      )
    }

}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

PostContainer.defaultProps = {
  posts: []
}

export default PostContainer