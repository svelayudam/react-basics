import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi(props) {
  return (
    <div>
      Hello <strong>{props.name}!</strong>
      <p> sdf- asd asdf </p>
      <div>'{5 + 10}'</div>
    </div>
  );
}

function MediaCard({ title, body, imageUrl }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageUrl} alt={imageUrl} />
    </div>
  );
}

function Gate({ isOpen }) {
  return <div>{isOpen == true ? "Open" : "Closed"}</div>;
}

//ReactDOM.render(<Hi name="Manu" />, document.querySelector("#root"));
//ReactDOM.render(
//  <MediaCard title="Test" body={<b>Body</b>} imageUrl="Manu" />,
//  document.querySelector("#root")
//);

ReactDOM.render(<Gate isOpen={true} />, document.querySelector("#root"));
