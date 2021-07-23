import {useParams} from 'react-router-dom';

export default function ProductDetail(props) {
  const params = useParams();

  // console.log(params);
  // console.log(props.products);
  const currentProduct = props.products.find(product => product.id === +params.productId)

  return (
    <div>
      Product details
      <ul>
        <li>Name: {currentProduct.name}</li>
        <li>Description: {currentProduct.description}</li>
        <li>Price: {currentProduct.price} RON</li>
      </ul>
    </div>
  )
}