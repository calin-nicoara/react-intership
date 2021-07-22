import './App.css';
import React, {useState} from "react";
import GroceryItemList from "./groceries/GroceryItemList";
import Card from "./UI/Card";
import NewGroceryItem from "./groceries/NewGroceryItem";

const groceryList = [
  {
    key: Math.random(),
    date:'19.02.2021',
    title:'Carne',
    price:10
  },
  {
    key: Math.random(),
    date:'19.05.2021',
    title:'Legume',
    price:20
  }
];

function App() {
  const [groceryItems, setGroceryItems] = useState(groceryList);

  function onSubmitGroceryHandler(newGroceryItem) {
    // console.log("From App: ", newGroceryItem);

    setGroceryItems((prevGroceryItems) => {
      return [newGroceryItem, ...prevGroceryItems];
    })
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Card>
        <GroceryItemList groceryList={groceryItems}/>
        <NewGroceryItem onSubmitGrocery={onSubmitGroceryHandler}/>
      </Card>
    </div>
  );
}

export default App;
