import styles from './GroceryItem.module.css';
import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";

function GroceryItem(props) {
  const authContext = useContext(AuthContext);

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
    <div className={styles['grocery-item']}>
      <div className={styles['grocery-item__date']}>Date: {props.date}</div>
      <div className={styles['grocery-item__title']}>{props.title}</div>
      <div className={styles['grocery-item__price']}>{props.price} RON</div>

      <div>Is logged in: {authContext.isLoggedIn.toString()}</div>
    </div>
  )
}

export default GroceryItem;