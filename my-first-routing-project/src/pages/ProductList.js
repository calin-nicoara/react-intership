import {Link, useHistory, useLocation, useRouteMatch} from "react-router-dom";

function sortProducts(products, isAscendingSort) {
  return products.sort((productA, productB) => {
    if(isAscendingSort) {
      return productA.name > productB.name ? 1: -1;
    } else {
      return productA.name > productB.name ? -1: 1;
    }
  });
}

export default function ProductList(prop) {
  const history = useHistory();
  const location = useLocation();
  const routeMatch = useRouteMatch();

  const queryParams = new URLSearchParams(location.search);

  const isAscendingSort =  queryParams.get("sort") === "asc";

  const sortedProducts = sortProducts(prop.products, isAscendingSort);

  function sortProductsHandle() {
    // history.push(routeMatch.path + "?sort=" + (isAscendingSort ? "desc" : "asc"));
    history.push({
      // pathname: routeMatch.url
      pathname: location.pathname,
      search: "?sort=" + (isAscendingSort ? "desc" : "asc")
    })
  }

  return (
    <div>
      <h2>Product Page</h2>
      <button className="btn btn-primary"
          onClick={sortProductsHandle}>Sort my products</button>
      <Link className="btn btn-outline-primary" to="/products/new-product">
        Create new product
      </Link>
      <ul>
        {
          sortedProducts.map(product =>
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