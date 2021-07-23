
export default function ProductList(prop) {

  return (
    <div>
      <h2>This is the product page</h2>
      <ul>
        {
          prop.products.map(product => <li key={product.id}>{product.name}</li>)
        }
      </ul>
    </div>
  )
}