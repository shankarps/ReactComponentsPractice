import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Comment";
import CommentWithButtons from "./CommentWithButtons";

//Define the App component
//Functional component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentWithButtons>
        {/* Nested component*/}
        <Comment
          author={faker.name.findName()}
          comment={faker.lorem.sentence()}
          time="Today at 6 PM"
          imageSrc={faker.image.avatar()}
        />
      </CommentWithButtons>
      <CommentWithButtons>
        <Comment
          author="Peter Lynch"
          comment="Price is what you pay. Value is what you get."
          time="Today at 7 PM"
          imageSrc={faker.image.avatar()}
        />
      </CommentWithButtons>
      <CommentWithButtons>
        <Comment
          author="Warren Buffett"
          comment="Price is what you pay. Value is what you get."
          time="Today at 8.30 PM"
          imageSrc={faker.image.avatar()}
        />
      </CommentWithButtons>
    </div>
  );
};

//Render the component
ReactDOM.render(<App />, document.querySelector("#root"));
