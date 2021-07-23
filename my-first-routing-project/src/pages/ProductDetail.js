import {useParams} from 'react-router-dom';
import "./ProductList";

export default function ProductDetail(props) {
  const params = useParams();

  const currentProduct = props.products.find(product => product.id === +params.productId)

  return (
    <div>
      <h2>Product details</h2>
      <ul className="list-group">
        <li className="list-group-item">Name: {currentProduct.name}</li>
        <li className="list-group-item">Description: {currentProduct.description}</li>
        <li className="list-group-item">Price: {currentProduct.price} RON</li>
      </ul>
    </div>
  )
}