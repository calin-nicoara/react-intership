import GroceryItem from "./GroceryItem";
import './GroceryItemList.css';

function GroceryItemList(props) {

  return (
    <div className="grocery-item-list">
      { props.groceryList.length === 0 &&
        <p>Please insert something</p>}
      { props.groceryList.length > 0 && (
        props.groceryList.map((groceryItem) => (
          <GroceryItem
            key={groceryItem.key}
            title={groceryItem.title}
            price={groceryItem.price}
            date={groceryItem.date} />
        ))
      )
      }


      {/*<GroceryItem title={props.groceryList[0].title}*/}
      {/*             date={props.groceryList[0].date}*/}
      {/*             price={props.groceryList[0].price}/>*/}
      {/*<GroceryItem title={props.groceryList[1].title}*/}
      {/*             date={props.groceryList[1].date}*/}
      {/*             price={props.groceryList[1].price}/>*/}
    </div>
  )
}

export default GroceryItemList;