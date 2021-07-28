import { useParams } from "react-router-dom";

export default function FoodItemDetails() {
    // useLocation() -- use to get query params
    // useHistory() -- use to navigate programmatically to other route with "push"
    // useParams() -- get path variable or params

    const params: {foodItemId: string} = useParams();


    return (
        <>
            <div>Product details page</div>
            <h1>Product id: {params.foodItemId}</h1>
        </>

    )
}