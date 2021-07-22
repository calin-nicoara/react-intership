import GroceryItem from "./GroceryItem";

function GroceryItemList() {
  const groceryList = [
    {
      date:'19.02.2021',
      title:'Carne',
      price:10
    },
    {
      date:'19.05.2021',
      title:'Legume',
      price:20
    }
  ];

  return (
    <div>
      <GroceryItem title={groceryList[0].title}
                   date={groceryList[0].date}
                   price={groceryList[0].price}/>
      <GroceryItem title={groceryList[1].title}
                   date={groceryList[1].date}
                   price={groceryList[1].price}/>
    </div>
  )
}

export default GroceryItemList;