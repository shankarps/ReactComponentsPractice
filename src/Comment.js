//Component that is one comment entity.
import React from "react";
import faker from "faker";

const Comment = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Warren Buffet
        </a>
        <div className="metadata">
          <span className="date">Today at 6.00 PM</span>
        </div>
        <div className="text">
          Price is what you pay. Value is what you get.
        </div>
      </div>
    </div>
  );
};

export default Comment;
