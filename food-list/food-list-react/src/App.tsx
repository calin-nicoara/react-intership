import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./common/Navbar";
import FoodList from "./food-list/FoodList";
import FoodItemDetails from "./food-list/FoodItemDetails";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="container px-4">
                <Switch>
                    <Route path={"/"} exact>
                        <Redirect to={"/food-list"}/>
                    </Route>
                    <Route path={"/food-list"} exact>
                        <FoodList/>
                    </Route>
                    <Route path={"/food-list/:foodItemId"}>
                        <FoodItemDetails/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
