function NewGroceryItem() {
  return (
    <form>
      <div className="title-input-control">
        <label htmlFor="title-input">Title</label>
        <input id="title-input" type="text"/>
      </div>
      <div className="price-input-control">
        <label htmlFor="price-input">Price</label>
        <input id="price-input"
               type="number"
               min="0.01"/>
      </div>
      <div className="date-input-control">
        <label htmlFor="date-input">Date</label>
        <input id="date-input" type="text"/>
      </div>
    </form>
  )
}