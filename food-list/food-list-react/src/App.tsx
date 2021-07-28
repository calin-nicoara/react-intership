import React from 'react';
import './App.css';
import Navbar from "./common/Navbar";
import FoodList from "./food-list/FoodList";


function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container px-4">
            <FoodList />
        </div>
    </div>
  );
}

export default App;
