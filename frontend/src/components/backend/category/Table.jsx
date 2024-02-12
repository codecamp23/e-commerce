import { PropTypes } from 'prop-types';
import Pagination from '../../../pagination/backend/Pagination';
import { Link } from 'react-router-dom';

const Table = ({ categoriesLength, loading, categories, page, limit, totalPage, handlePageChange, categoryStatusChange, deleteData }) => {
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr className="text-center">
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>#</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Category Name</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Category Slug</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Category Image</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Status</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriesLength > 0 ? categories.map((category, index) => (<tr key={index} className="py-3 text-center">
                            <td className="text-muted py-md-3 py-0">{index + 1}</td>
                            <td className="text-muted py-md-3 py-0">{category.name}</td>
                            <td className="text-muted py-md-3 py-0">{category.slug}</td>
                            <td className="text-muted py-md-3 py-0">
                                <img src={category.image} style={{ width: "50px" }} alt="..." />
                            </td>
                            <td className="py-md-3 py-0">
                                <div className="form-check form-switch d-flex justify-content-center ">
                                    <input className="form-check-input bg-info border-info" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => categoryStatusChange(category.id)} defaultChecked={category.status === "active" ? true : false}  />
                                </div>
                            </td>
                            <td className="text-muted py-md-3 py-0">
                                <Link to={`/admin/category-edit/${category.id}`} className="btn btn-sm btn-outline-primary  p-0 ps-2 pb-1 rounded-circle me-1">
                                    <i className="lni lni-pencil-alt" style={{ fontSize: "13px" }} />
                                </Link>
                                <button type="button" onClick={() => deleteData(category.id)} className="btn btn-sm btn-outline-danger  p-0 ps-2 pb-1 rounded-circle">
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
                            <td colSpan={6} className='text-center'>Category not found</td>
                        </tr>}
                    </tbody>
                </table>
            </div>
            <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} />
        </div>
    );
}

Table.propTypes = {
    categoriesLength: PropTypes.any,
    loading: PropTypes.any,
    categories: PropTypes.any,
    page: PropTypes.any, 
    limit: PropTypes.any, 
    totalPage: PropTypes.any,
    handlePageChange: PropTypes.any,
    categoryStatusChange: PropTypes.any,
    deleteData: PropTypes.any,
}

export default Table;
