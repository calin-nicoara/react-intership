import "./FoodListItem.css";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function FoodListItem(props: any) {
    const [currentName, setCurrentName] = useState(props.name);

    useEffect(() => {
        // console.log("Current name:", currentName);
    }, [currentName]);

    function onChangeTitleHandler(event: any) {
        setCurrentName(event.target.value);
    }

    return (
        <div className="food-list-item card col-4 col-sm-12 mr-1">
            <img src={props.imageLink} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{currentName}</h5>
                    <p className="card-text">{props.description}.</p>

                    <input type="text" onChange={onChangeTitleHandler}/>

                    <Link to={"/food-list/" + props.itemId} className="btn btn-primary">Go to details</Link>
                </div>
        </div>
    )
}