import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <Comment
        author="Sam"
        timeAgo="Today at 4:00 PM"
        text="Where is it ?"
        img={faker.image.avatar()}
      />
      <Comment
        author="Jane"
        timeAgo="Yesterday at 2:50 PM"
        text="Good Luck !"
        img={faker.image.avatar()}
      />
      <Comment
        author="Alexa"
        timeAgo="Today at 7:30 PM"
        text="Love this !"
        img={faker.image.avatar()}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
