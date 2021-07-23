import {useState} from "react";
import {Prompt} from "react-router-dom";

export default function NewProductForm(props) {

  //TODO finish validation, add on blur for each field

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');

  const enteredProductNameIsInvalid = enteredNameTouched && enteredName.trim().length === 0;
  const enterProductPriceIsInvalid = enteredPrice < 10;

  let formIsInvalid = true;

  if(!enteredProductNameIsInvalid && !enterProductPriceIsInvalid) {
    formIsInvalid = false;
  }

  function onNameChangedHandler(event) {
    setEnteredName(event.target.value);
    setEnteredNameTouched(false);
  }

  function onNameBlurred() {
    setEnteredNameTouched(true);
  }

  function onDescriptionChangedHandler(event) {
    setEnteredDescription(event.target.value);
  }

  function onPriceChangedHandler(event) {
    setEnteredPrice(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    if(formIsInvalid) {
      return;
    }

    const newProduct = {
      id: Math.random(),
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice
    }

    console.log(newProduct);

    props.onNewProduct(newProduct);
  }

  return (
    <div>
      <Prompt
        when={false}
        message={(location) => "Are you sure? You will lose all your data!"
        }
      />
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product name</label>
          <input type="text" className="form-control"
                 value={enteredName}
                 onChange={onNameChangedHandler}
                 onBlur={onNameBlurred}
                 id="productName" />
          {enteredProductNameIsInvalid && <p>Please enter a valid name</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Product description</label>
          <input type="text"
                 value={enteredDescription}
                 onChange={onDescriptionChangedHandler}
                 className="form-control" id="productDescription" />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input type="number"
                 value={enteredPrice}
                 onChange={onPriceChangedHandler}
                 className="form-control" id="productPrice" />
          {enterProductPriceIsInvalid && <p>Please enter a valid price greater or equal than 10</p>}
        </div>
        <button type="submit"
                // disabled={formIsInvalid}
                className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}