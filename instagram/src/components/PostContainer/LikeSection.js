import React from 'react';

const LikeSection = props => {
  return [
    <div className="commentSectionIcons">
        <div className="leftIcons">
            <div onClick={props.likeCounter}>
            <i class="far fa-heart"></i>
        </div>
            <i class="far fa-comment"></i>
            <i class="fas fa-external-link-alt"></i>
        </div>
        <div className="rightIcon">
                    <i class="far fa-bookmark"></i>
                  </div>
    </div>,
    <div>
      <div>{props.likes} likes</div>
    </div>
  ];
};

export default LikeSection;