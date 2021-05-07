import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

export default function App() {
  const [scale, setScale] = useState(1);

  const styles = {
    width: scale * 100 + "%",
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setScale(scale + 1);
          }}
        >
          Make Bigger
        </button>
        <button
          onClick={() => {
            setScale(scale - 1);
          }}
        >
          Make Smaller
        </button>

        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={styles}
          onClick={() => {
            alert("HI");
            setScale(scale + 1);
          }}
        />
      </header>
    </div>
  );
}
