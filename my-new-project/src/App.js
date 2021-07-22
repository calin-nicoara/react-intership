import './App.css';
import React from "react";
import GroceryItemList from "./groceries/GroceryItemList";
import Card from "./UI/Card";
import NewGroceryItem from "./groceries/NewGroceryItem";

function App() {
  function onSubmitGroceryHandler(newGroceryItem) {
    console.log("From App: ", newGroceryItem);
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Card>
        <GroceryItemList />
        <NewGroceryItem onSubmitGrocery={onSubmitGroceryHandler}/>
      </Card>
    </div>
  );
}

export default App;
