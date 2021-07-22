import './App.css';
import React from "react";
import GroceryItemList from "./groceries/GroceryItemList";
import Card from "./UI/Card";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Card>
        <GroceryItemList />
      </Card>
    </div>
  );
}

export default App;
