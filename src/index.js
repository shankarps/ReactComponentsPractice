import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Comment";

//Define the App component
//Functional component
const App = () => {
  return (
    <div className="ui container comments">
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
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Peter Lynch
          </a>
          <div className="metadata">
            <span className="date">Today at 5.00 PM</span>
          </div>
          <div className="text">
            Know what you own, and know why you own it.
          </div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Charlie Munger
          </a>
          <div className="metadata">
            <span className="date">Today at 3.00 PM</span>
          </div>
          <div className="text">
            Spend each day trying to be a little wiser than you were when you
            woke up.
          </div>
        </div>
      </div>
    </div>
  );
};

//Render the component
ReactDOM.render(<App />, document.querySelector("#root"));
