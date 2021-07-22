import './GroceryItem.css';
import {useState} from "react";

function GroceryItem(props) {
  // const [title, setTitle] = useState(props.title);

  // console.log("Grocery re run!");

  // function onClickHandler() {
  //
  //   // alert('Clicked');
  //   // title = 'New title';
  //   setTitle((prevState) => 'New title');
  // }

  // let title = props.title;

  return (
    <div className="grocery-item">
      <div className="grocery-item__date">Date: {props.date}</div>
      <div className="grocery-item__title">{props.title}</div>
      <div className="grocery-item__price">{props.price} RON</div>
    </div>
  )
}

export default GroceryItem;