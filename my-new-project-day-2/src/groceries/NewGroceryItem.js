import {useEffect, useState} from "react";

export default function NewGroceryItem(props) {
  const[enteredTitle, setEnteredTitle] = useState('');
  const[enteredPrice, setEnteredPrice] = useState('');
  const[enteredDate, setEnteredDate] = useState('');

  useEffect(() => {
    console.log("Show each time state is changed!");
  });

  // useEffect(() => {
  //   console.log("Show one time!");
  // }, []);
  //
  // useEffect(() => {
  //   console.log("Change title!");
  //   return () => console.log("Cleaning title!");
  // }, [enteredTitle]);

  // const[userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredPrice: '',
  //   enteredDate: ''
  // });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    setEnteredPrice(10);

    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value
    // }))
  }

  function priceChangeHandler(event) {
    setEnteredPrice(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredPrice: event.target.value
    // })
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  }

  function submitHandler(event) {
    event.preventDefault();

    const groceryItem = {
      key: Math.random(),
      title: enteredTitle,
      price: enteredPrice,
      date: enteredDate
    };

    props.onSubmitGrocery(groceryItem);

    setEnteredTitle('');
    setEnteredDate('');
    setEnteredPrice('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`title-input-control ${true ? 'invalid': ''}`}>
        <label style={ {color: false ? 'red': 'blue'} } htmlFor="title-input">Title</label>
        <input id="title-input" type="text" onChange={titleChangeHandler}
          value={enteredTitle}/>
      </div>
      <div className="price-input-control">
        <label htmlFor="price-input">Price</label>
        <input id="price-input" onChange={priceChangeHandler}
               value={enteredPrice}
               type="number"
               min="0.01"
               step="0.01"
        />
      </div>
      <div className="date-input-control">
        <label htmlFor="date-input">Date</label>
        <input id="date-input" value={enteredDate} type="text" onChange={dateChangeHandler}/>
      </div>

      <button type="submit">
        Submit new item!
      </button>
    </form>
  )
}