import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="postComment">
      <div className="postCommentUsername">
          {props.comment.username} <span className="commentText">{props.comment.text}</span>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;