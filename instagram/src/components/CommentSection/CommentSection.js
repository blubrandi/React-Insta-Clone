import React from 'react';

import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';

import './CommentSection.css'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
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
      const comments = this.state.comments.slice();
      comments.push(newComment)
      this.setState({
        comments, comment:''
      })
  }

  render() {
    return (
      <div>
        <p>
          {this.state.comments.map(comment => {
            return (
              <div>
                <Comment comment={comment} />
              </div>
            )
          })}
        </p>
        <CommentForm
          comment={this.state.comment}
          addNewComment={this.addNewComment}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;