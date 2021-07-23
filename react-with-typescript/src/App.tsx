import React from 'react';
import './App.css';
import ShowItem from "./ShowItem";
import ShowItemInfo from "./models/ShowItemInfo";

function App() {
  return (
    <div className="App">
      <h1>Hello, Typescript</h1>
      <ShowItem  showItemInfo={new ShowItemInfo(1, "TEST")}/>
    </div>
  );
}

export default App;
