import FoodListItem from "./FoodListItem";

export default function FoodList() {
    const foodList = [
        {
            "id": 1,
            "name": "Tocanita",
            "description": "Gustos!",
            "image": "https://via.placeholder.com/150"
        },
        {
            "id": 2,
            "name": "Mamaliga",
            "description": "Satioasa!",
            "image": "https://via.placeholder.com/150"
        },
        {
            "id": 3,
            "name": "Friptura de porcs",
            "description": "Savuroasa!",
            "image": "https://via.placeholder.com/150"
        }
    ]

    return (
        <div className="food-list row gx-5">
            {foodList.map(foodItem => <FoodListItem />)}
        </div>
    )
}