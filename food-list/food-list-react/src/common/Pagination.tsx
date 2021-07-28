import { useHistory } from "react-router-dom";

export default function Pagination(props: any) {
    const locationStateHistory = useHistory();

    const listItems = [];

    function onClickPage(event: any) {
        const number = Number(event.target.innerHTML)-1;
        locationStateHistory.push({
            pathname: "/food-list",
            search: "?page=" + number + "&size=3"
        })
    }

    for(let i = 0; i < props.totalPages; i++) {
        const classNames = i === Number(props.currentPage) ? "page-item active": "page-item"

        listItems.push(<li key={i} className={classNames}>
            <a className="page-link" onClick={onClickPage} href="#">{i+1}
            </a>
        </li>)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {listItems}
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    )
}