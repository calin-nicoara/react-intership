import './App.css';
import {NavLink, Route, Switch, Redirect} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import {useState} from "react";
import NotFound from "./pages/NotFound";

const initialProducts = [
  {
    id: 1,
    name: "Poiana",
    description: "Ciocolata",
    price: 10
  },
  {
    id: 2,
    name: "Dero",
    description: "Detergent",
    price: 20
  }
]

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="App">
      <nav className="nav-parent">
        <ul className="nav">
          <li className="nav-item"><NavLink className="nav-link" activeClassName="active-link" to="/dashboard">
            Dashboard
          </NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" activeClassName="active-link" to="/products">
            Products
          </NavLink></li>
        </ul>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard"/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/products" exact>
            <ProductList products={products} />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail products={products} />
          </Route>
          {/*<Route path="*">*/}
          {/*  <Redirect to="/dashboard"/>*/}
          {/*</Route>*/}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
