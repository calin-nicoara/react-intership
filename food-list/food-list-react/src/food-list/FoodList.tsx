import FoodListItem from "./FoodListItem";
import Pagination from "../common/Pagination";
import { useLocation } from "react-router-dom";

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
    },
    {
        "id": 4,
        "name": "Placinta",
        "description": "Gustos!",
        "image": "https://via.placeholder.com/150"
    },
    {
        "id": 5,
        "name": "Prajitura",
        "description": "Satioasa!",
        "image": "https://via.placeholder.com/150"
    },
    {
        "id": 6,
        "name": "Ciorbica",
        "description": "Savuroasa!",
        "image": "https://via.placeholder.com/150"
    }
]

interface PaginationData {
    items: any[],
    totalElements: number,
    totalPages: number
}

function getPaginationDataAndItems(page: string | null,
                                   size: string | null): PaginationData {
    const pageNumber = Number(page);
    const sizeNumber = Number(size);

    return {
        items: foodList.slice(pageNumber * sizeNumber, (pageNumber+1) * sizeNumber),
        totalElements: foodList.length,
        totalPages: Math.ceil(foodList.length / Number(size))
    }
}

export default function FoodList() {
    const locationStateLocation = useLocation();

    const searchParams = new URLSearchParams(locationStateLocation.search);

    const paginationDataAndItems = getPaginationDataAndItems(searchParams.get("page"), searchParams.get("size"));

    return (
        <div className="food-list row gx-5">
            {paginationDataAndItems.items.map(foodItem => <FoodListItem
                key={foodItem.id}
                itemId={foodItem.id}
                name={foodItem.name}
                description={foodItem.description}
                imageLink={foodItem.image}
            />)}
            <Pagination currentPage={searchParams.get("page")}
                totalPages={paginationDataAndItems.totalPages}
                totalElements={paginationDataAndItems.totalElements}/>
        </div>
    )
}