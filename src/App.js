import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [pxValue, setPxValue] = useState("");
  const [remValue, setRemValue] = useState("");

  const convertPxToRem = (e) => {
    const pxInputValue = e.target.value;
    const remOutputValue = pxInputValue / 16;
    setPxValue(pxInputValue);
    setRemValue(remOutputValue);
  };

  return (
    <div className="App">
      <h1>Pixel to Rem Converter</h1>
      <div className="input-container">
        <label>Enter Pixel Value:</label>
        <input type="number" value={pxValue} onChange={convertPxToRem} />
      </div>
      <div className="output-container">
        <label>Rem Value:</label>
        <input type="text" value={remValue} readOnly />
      </div>
    </div>
  );
}
