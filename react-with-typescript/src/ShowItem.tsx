import {useEffect, useRef, useState} from "react";
import ShowItemInfo from "./models/ShowItemInfo";

const ShowItem: React.FC<{showItemInfo: ShowItemInfo}> = (props) => {
    const inputTextRef = useRef<HTMLInputElement>(null);

    const [showItemInfo, setShowItemInfo] = useState<ShowItemInfo>(
        // new ShowItemInfo(1, "Show item name")
        props.showItemInfo
    )

    // useEffect(() => {
    //     setShowItemInfo((prevState: any) => {
    //         return "aaa";
    //     });
    // }, [])

    return <div className="">
        <h2>Name: {showItemInfo.name}</h2>
        <h3>Id: {showItemInfo.id}</h3>

        <input ref={inputTextRef} type="text"/>
    </div>
}

export default ShowItem;