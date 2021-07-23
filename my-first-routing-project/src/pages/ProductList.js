import {Link, useHistory} from "react-router-dom";


export default function ProductList(prop) {

  const history = useHistory();

  function goToDetailsPage() {
    history.push("/products/1");
  }

  return (
    <div>
      <h2>This is the product page</h2>
      <ul>
        {
          prop.products.map(product => <li key={product.id}>
            {product.name}
            {/*<Link to={`/products/${product.id}`}>Go to product</Link>*/}
            <button onClick={goToDetailsPage}>Go</button>
          </li>)
        }
      </ul>
    </div>
  )
}