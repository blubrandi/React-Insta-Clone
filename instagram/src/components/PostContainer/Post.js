import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

import './PostContainer.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  likeCounter = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="postContainer">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div>
          <img
            alt="Post Banner"
            src={this.props.post.imageUrl}
          />
        </div>
        <div className="postLikes">
        <LikeSection
          likeCounter={this.likeCounter}
          likes={this.state.likes}
        />
        </div>
        <div className="comments">
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;