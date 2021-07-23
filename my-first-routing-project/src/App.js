import './App.css';
import {NavLink, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import {useState} from "react";

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
      <h1>My APP!</h1>
      <nav>
        <ul>
          <li><NavLink activeClassName="active-link" to="/dashboard">
            Dashboard
          </NavLink></li>
          <li><NavLink activeClassName="active-link" to="/products">
            Products
          </NavLink></li>
        </ul>
      </nav>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/products">
        <ProductList products={products} />
      </Route>
      <Route path="/product-details/:productId">
        <ProductDetail products={products} />
      </Route>
    </div>
  );
}

export default App;
