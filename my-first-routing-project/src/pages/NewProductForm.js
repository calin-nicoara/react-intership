export default function NewProductForm() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product name</label>
          <input type="text" className="form-control" id="productName" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Product description</label>
          <input type="text" className="form-control" id="productDescription" />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input type="number" className="form-control" id="productPrice" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}