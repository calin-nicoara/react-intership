import {Link, useHistory} from "react-router-dom";


export default function ProductList(prop) {

  const history = useHistory();

  function goToDetailsPage() {
    history.push("/products/1");
  }

  return (
    <div>
      <h2>Product Page</h2>
      <ul>
        {
          prop.products.map(product =>
            <div className="card" key={product.id}>
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    {product.name}
                  </div>
                  <div className="col-3">
                    <Link  className="btn btn-outline-primary" to={`/products/${product.id}`}>Go to product</Link>
                  </div>
                </div>
              </div>
            </div>)
        }
      </ul>
    </div>
  )
}