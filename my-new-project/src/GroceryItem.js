import './GroceryItem.css';

function GroceryItem(props) {
  return (
    <div className="grocery-item">
      <div className="grocery-item__date">Date: {props.date}</div>
      <div className="grocery-item__title">{props.title}</div>
      <div className="grocery-item__price">{props.price} RON</div>
    </div>
  )
}

export default GroceryItem;