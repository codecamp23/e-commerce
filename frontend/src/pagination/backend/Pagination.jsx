import '../../main.css';
import { returnPaginationRange } from './returnPaginationRange';
import PropTypes from 'prop-types';

const Pagination = ({ totalPage, page, limit, siblings, onPageChange  }) => {
    let array = returnPaginationRange(totalPage, page, limit, siblings);
    return (
        <div className="col-md-12 gallery_pagination d-flex justify-content-end">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {/* <li className="page-item"><span onClick={() => props.onPageChange("&laquo;")} className="page-link px-3">&laquo;</span></li> */}
                    <li className="page-item ms-2"><span onClick={() => onPageChange("&lsaquo;")} className="page-link px-3">&lsaquo;</span></li>
                    {array.map(value => {
                        if (value === page) {
                            return (
                                <li key={value} className="page-item ms-2"><a className="page-link active" onClick={() => onPageChange(value)}>{value}</a></li>
                            )
                        } else {
                            return (
                                <li key={value} className="page-item ms-2"><a className="page-link" onClick={() => onPageChange(value)}>{value}</a></li>
                            )
                        }
                    })}
                    <li className="page-item ms-2"><span onClick={() => onPageChange("&rsaquo;")} className="page-link px-3">&rsaquo;</span></li>
                    {/* <li className="page-item ms-2"><span onClick={() => props.onPageChange("&raquo;")} className="page-link px-3">&raquo;</span></li> */}
                </ul>
            </nav>

        </div>
    );
}

Pagination.propTypes = {
    totalPage: PropTypes.any,
    page: PropTypes.any,
    limit: PropTypes.any,
    siblings: PropTypes.any,
    onPageChange: PropTypes.any,
}

export default Pagination;
