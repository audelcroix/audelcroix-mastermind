import React from "react";
import ColorState from "./context/ColorState";

import Game from "./components/Game";
import Rules from "./components/Rules";

import "./App.css";

function App() {
  return (
    <ColorState>
      <div className='App'>
        <Game />

        <Rules />
      </div>
    </ColorState>
  );
}

export default App;
