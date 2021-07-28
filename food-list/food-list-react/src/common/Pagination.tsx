export default function Pagination(props: any) {
    const listItems = [];
    for(let i = 0; i < props.totalPages; i++) {
        listItems.push(<li className="page-item"><a className="page-link" href="#">1</a></li>)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>

                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    )
}