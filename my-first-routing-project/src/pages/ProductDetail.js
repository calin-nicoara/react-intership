import {Link, useParams, useRouteMatch} from 'react-router-dom';
import "./ProductList";

export default function ProductDetail(props) {
  const params = useParams();
  const routerMatch = useRouteMatch();

  console.log("ROUTE MATCH:", routerMatch);

  const currentProduct = props.products.find(product => product.id === +params.productId)

  return (
    <div>
      <h2>Product details</h2>
      <ul className="list-group">
        <li className="list-group-item">Name: {currentProduct.name}</li>
        <li className="list-group-item">Description: {currentProduct.description}</li>
        <li className="list-group-item">Price: {currentProduct.price} RON</li>
        <Link className="btn btn-outline-primary"
              to={routerMatch.url + "/edit"}>Edit Product</Link>
      </ul>
    </div>
  )
}