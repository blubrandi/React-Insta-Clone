import React from 'react';

const PostHeader = props => {
  return (
    <div className="postUserInfo">
      <div>
        <img
          alt="post user info" className="userAvatar" src={props.thumbnailUrl}/>
      </div>
      <div className="postUserName">
        {props.username}
        </div>
    </div>
  );
};

export default PostHeader;