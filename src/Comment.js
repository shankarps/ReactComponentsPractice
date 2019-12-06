//Component that is one comment entity.
import React from "react";

const Comment = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.imageSrc} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
