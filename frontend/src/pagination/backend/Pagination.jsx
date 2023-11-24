import '../../main.css';
import { returnPaginationRange } from './returnPaginationRange';

const Pagination = (props) => {
    let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings);
    return (
        <div className="col-md-12 gallery_pagination d-flex justify-content-end">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {/* <li className="page-item"><span onClick={() => props.onPageChange("&laquo;")} className="page-link px-3">&laquo;</span></li> */}
                    <li className="page-item ms-2"><span onClick={() => props.onPageChange("&lsaquo;")} className="page-link px-3">&lsaquo;</span></li>
                    {array.map(value => {
                        if (value === props.page) {
                            return (
                                <li key={value} className="page-item ms-2"><a className="page-link active" onClick={() => props.onPageChange(value)}>{value}</a></li>
                            )
                        } else {
                            return (
                                <li key={value} className="page-item ms-2"><a className="page-link" onClick={() => props.onPageChange(value)}>{value}</a></li>
                            )
                        }
                    })}
                    <li className="page-item ms-2"><span onClick={() => props.onPageChange("&rsaquo;")} className="page-link px-3">&rsaquo;</span></li>
                    {/* <li className="page-item ms-2"><span onClick={() => props.onPageChange("&raquo;")} className="page-link px-3">&raquo;</span></li> */}
                </ul>
            </nav>

        </div>
    );
}

export default Pagination;
