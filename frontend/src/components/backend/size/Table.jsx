import { PropTypes } from 'prop-types';
import Pagination from '../../../pagination/backend/Pagination';
import { Link } from 'react-router-dom';

const Table = ({ sizesLength, loading, sizes, page, limit, totalPage, handlePageChange, sizeStatusChange, deleteData }) => {
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr className="text-center">
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>#</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Measurement Point</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Measurement Type</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Size Option</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sizesLength > 0 ? sizes.map((size, index) => (<tr key={index} className="py-3 text-center">
                            <td className="text-muted py-md-3 py-0">{index + 1}</td>
                            <td className="text-muted py-md-3 py-0">{size.name}</td>
                            <td className="text-muted py-md-3 py-0">{size.slug}</td>
                            <td className="py-md-3 py-0">
                            </td>
                            <td className="text-muted py-md-3 py-0">
                                <Link to={`/admin/category-edit/${size.id}`} className="btn btn-sm btn-outline-primary  p-0 ps-2 pb-1 rounded-circle me-1">
                                    <i className="lni lni-pencil-alt" style={{ fontSize: "13px" }} />
                                </Link>
                                <button type="button" onClick={() => deleteData(size.id)} className="btn btn-sm btn-outline-danger  p-0 ps-2 pb-1 rounded-circle">
                                    <i className="lni lni-trash" style={{ fontSize: "13px" }}></i>
                                </button>
                            </td>
                        </tr>)) : loading === true ? <tr>
                            <td colSpan="6" className="p-5">
                                <div className="text-center">
                                    <div className="spinner-border text-info" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </td>
                        </tr> : <tr>
                            <td colSpan={5} className='text-center'>Category not found</td>
                        </tr>}
                    </tbody>
                </table>
            </div>
            <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} />
        </div>
    );
}

Table.propTypes = {
    sizesLength: PropTypes.any,
    loading: PropTypes.any,
    sizes: PropTypes.any,
    page: PropTypes.any, 
    limit: PropTypes.any, 
    totalPage: PropTypes.any,
    handlePageChange: PropTypes.any,
    sizeStatusChange: PropTypes.any,
    deleteData: PropTypes.any,
}

export default Table;
