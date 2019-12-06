import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Comment";

//Define the App component
//Functional component
const App = () => {
  return (
    <div className="ui container comments">
      {/* Nested component*/}
      <Comment
        author={faker.name.findName()}
        comment={faker.lorem.sentence()}
        time="Today at 6 PM"
        imageSrc={faker.image.avatar()}
      />
      <Comment
        author="Peter Lynch"
        comment="Price is what you pay. Value is what you get."
        time="Today at 7 PM"
        imageSrc={faker.image.avatar()}
      />
      <Comment
        author="Warren Buffett"
        comment="Price is what you pay. Value is what you get."
        time="Today at 8.30 PM"
        imageSrc={faker.image.avatar()}
      />
    </div>
  );
};

//Render the component
ReactDOM.render(<App />, document.querySelector("#root"));
