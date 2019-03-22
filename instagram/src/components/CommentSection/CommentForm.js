import React from 'react';

const CommentForm = props => {
  return (
    <div className="addComment">
      <form onSubmit={props.addNewComment}>
        <input 
          type="text"
          placeholder="Add Comment"
          name="comment"
          onChange={props.handleChanges}
          value={props.comment}
          />
      </form>
    </div>
  );
};

export default CommentForm;