import React, { useState } from "react";

function App() {
  var [name, setName] = useState("");
  var [headingText, setHeadingText] = useState("");
  var [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleMouseClick() {
    setHeadingText(name);
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleMouseClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
