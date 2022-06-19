import React, { useState } from "react";
import "./TextUtilities.css";

const TextUtilities = (props) => {
  const [text, setText] = useState("Write here...");
  const uppercase = () => {
    // const newText = text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlert("Uppercase has converted", "success");
  };
  const lowercase = () => {
    setText(text.toLocaleLowerCase());
    props.showAlert("Lowercase has converted", "success");
  };
  const clear = () => {
    setText("");
  };
  const select = () => {
    let text = document.getElementById("text");
    console.log(text);
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const extraSpace = () => {
    let againText = text.split(/[ ]+/);
    console.log(againText);
    setText(againText.join(" "));
    console.log("clicked");
  };
  const onchangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h1 className="header">{props.heading}</h1>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="text"
                rows="8"
                value={text}
                onChange={onchangeHandler}
                style={{
                  backgroundColor: props.mode === "dark" ? "gray" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              ></textarea>
            </div>
            <button className="btn btn-dark" onClick={uppercase}>
              Uppercase
            </button>
            <button className="btn btn-dark mx-1" onClick={lowercase}>
              Lowercase
            </button>
            <button className="btn btn-dark mx-1" onClick={clear}>
              Clear
            </button>
            <button className="btn btn-dark mx-1" onClick={select}>
              Select
            </button>
            <button className="btn btn-dark mx-1" onClick={extraSpace}>
              Extra Space
            </button>
            <h1 className="my-3">
              <span className="text-danger">{text.split(" ").length} </span>
              Words and <span className="text-danger">{text.length}</span>
              Charecter
            </h1>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter some text"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextUtilities;
