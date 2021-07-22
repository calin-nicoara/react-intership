import {useRef, useState} from "react";

export default function NewGroceryItemUsingRef(props) {

  const enteredTitleRef = useRef();
  const enteredPriceRef = useRef();
  const enteredDateRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const groceryItem = {
      key: Math.random(),
      title: enteredTitleRef.current.value,
      price: enteredPriceRef.current.value,
      date: enteredDateRef.current.value
    };

    props.onSubmitGrocery(groceryItem);

    enteredTitleRef.current.value = '';
    enteredPriceRef.current.value = ''
    enteredDateRef.current.value = '';
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`title-input-control ${true ? 'invalid': ''}`}>
        <label style={ {color: false ? 'red': 'blue'} } htmlFor="title-input">Title</label>
        <input id="title-input" type="text" ref={enteredTitleRef} />
      </div>
      <div className="price-input-control">
        <label htmlFor="price-input">Price</label>
        <input id="price-input"
               type="number"
               min="0.01"
               step="0.01"
               ref={enteredPriceRef}
        />
      </div>
      <div className="date-input-control">
        <label htmlFor="date-input">Date</label>
        <input id="date-input"
               ref={enteredDateRef} />
      </div>

      <button type="submit">
        Submit new item!
      </button>
    </form>
  )
}