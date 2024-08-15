import React, { useState } from "react";
import UserCards from "./Cards/userCards";
import "./App.css";
import Validation from "./Cards/Validation";
import CharComponent from "./Cards/CharComponent";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const removeChar = (index) => {
    const newText = text.split("");
    newText.splice(index, 1);
    setText(newText.join(""));
  };

  const charComponents = text.split("").map((char, index) => (
    <CharComponent
      key={index}
      value={char}
      onClick={() => removeChar(index)} // Pass index to removeChar
    />
  ));

  return (
    <>
      <input type="text" onChange={handleChange} value={text} />
      <br />
      <h3>{text}</h3>
      <br />
      <h2>THE COUNT OF LETTERS IS: {text.length}</h2>
      <Validation count={text.length} />
      
      {charComponents}
    </>
  );
};

export default App;
