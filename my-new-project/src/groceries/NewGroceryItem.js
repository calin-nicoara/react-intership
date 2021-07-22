import {useState} from "react";

export default function NewGroceryItem(props) {
  const[enteredTitle, setEnteredTitle] = useState('');
  const[enteredPrice, setEnteredPrice] = useState('');
  const[enteredDate, setEnteredDate] = useState('');

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function priceChangeHandler(event) {
    setEnteredPrice(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const groceryItem = {
      title: enteredTitle,
      price: enteredPrice,
      date: enteredDate
    };

    props.onSubmitGrocery(groceryItem);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="title-input-control">
        <label htmlFor="title-input">Title</label>
        <input id="title-input" type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="price-input-control">
        <label htmlFor="price-input">Price</label>
        <input id="price-input" onChange={priceChangeHandler}
               type="number"
               min="0.01"
               step="0.01"
        />
      </div>
      <div className="date-input-control">
        <label htmlFor="date-input">Date</label>
        <input id="date-input" type="text" onChange={dateChangeHandler}/>
      </div>

      <button type="submit">
        Submit new item!
      </button>
    </form>
  )
}