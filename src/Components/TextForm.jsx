import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const wordCount =
    text.trim().length === 0
      ? 0
      : text
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0).length;

  const charCount = text.replace(/\s+/g, "").length;

  const handleUpClick = () => {
    console.log("text was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowerClick = () => {
    console.log("text was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCleartext = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleSentCase = () => {
    let newText =
      text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to Sentence Case", "success");
  };

  //   setText("New text");
  return (
    <>
      <div
        className="container my-3 "
        style={{ color: props.mode === "#042743" ? "white" : "black" }}
      >
        <h2>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Convert to Uppercase
          </label>
        </h2>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            backgroundColor: props.mode === "#042743" ? "grey" : "white",
            color: props.mode === "#042743" ? "white" : "black",
          }}
        ></textarea>
        <button
          className={`btn btn-primary mx-2 mt-3 ${
            props.mode2 === "red" ? "btn-dark" : "btn-primary"
          }`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-primary mx-2 mt-3 ${
            props.mode2 === "red" ? "btn-dark" : "btn-primary"
          }`}
          onClick={handleLowerClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-primary mx-2 mt-3 ${
            props.mode2 === "red" ? "btn-dark" : "btn-primary"
          }`}
          onClick={handleCleartext}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-primary mx-2 mt-3 ${
            props.mode2 === "red" ? "btn-dark" : "btn-primary"
          }`}
          onClick={handleSentCase}
        >
          Sentence Case
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "#042743" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {wordCount} words and {charCount} characters.
        </p>
        <p>{0.008 * wordCount} minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
}
