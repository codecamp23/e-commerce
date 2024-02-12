import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Pagination from './../../../pagination/backend/Pagination';

const Table = ({ products, loading, page, limit, totalPage, handlePageChange, refundableHandle, productStatus, dataDelete }) => {
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-sm table-hover">
                    <thead>
                        <tr className="text-center">
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>
                                <div className="form-check d-flex align-items-center ">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                </div>
                            </th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Name</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Slug</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Category</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Brand</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Images</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Refundable</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Product Status</th>
                            <th style={{ fontSize: "12px", fontWeight: "500" }}>Options</th>
                        </tr>
                    </thead>
                    <tbody>{products.length > 0 ? products.map((product, index) => (<tr key={index + 1}>
                            <td className="text-muted py-md-3 py-0">
                                <div className="form-check d-flex align-items-center ">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                </div>
                            </td>
                            <td className="text-muted py-md-3 py-0 text-center">{product.name}</td>
                            <td className="text-muted py-md-3 py-0 text-center">{product.slug}</td>
                            <td className="text-muted py-md-3 py-0 text-center">{product.category.name}</td>
                            <td className="text-muted py-md-3 py-0 text-center">{product.brand.name}</td>
                            <td className="text-muted py-md-3 py-0 text-center">
                                <img src={product.image} style={{ width: "50px" }} alt="" />
                            </td>
                            <td className="text-muted py-md-3 py-0">
                                <div className="form-check form-switch justify-content-center d-flex">
                                    <input className="form-check-input bg-info border-info" onClick={() => refundableHandle(product.id)} type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={product.refundable === 'yes' ? true : false} />
                                </div>
                            </td>
                            <td className="text-muted py-md-3 py-0">
                                <div className="form-check form-switch justify-content-center d-flex">
                                    <input className="form-check-input bg-info border-info" onClick={() => productStatus(product.id)} type="checkbox" role="switch" id="flexSwitchCheckDefault1" defaultChecked={product.status === 'publish' ? true : false} />
                                </div>
                            </td>
                            <td className="text-muted py-md-3 py-0 text-center">
                                <Link to={`/admin/product-edit/${product.id}`} className="btn btn-sm btn-outline-primary  p-0 ps-2 pb-1 rounded-circle me-1">
                                    <i className="lni lni-pencil-alt" style={{ fontSize: "13px" }} />
                                </Link>
                            <button type="button" onClick={() => dataDelete(product.id)} className="btn btn-sm btn-outline-danger  p-0 ps-2 pb-1 rounded-circle">
                                    <i className="lni lni-trash" style={{ fontSize: "13px" }}></i>
                                </button>
                            </td>
                    </tr>)) : loading === true ? <tr>
                        <td colSpan={9} className="p-5">
                            <div className="text-center">
                                <div className="spinner-border text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </td>
                    </tr> : <tr>
                            <td colSpan={9} className="text-center">Products not found</td>
                        </tr>}
                    </tbody>
                </table>
            </div>
            <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} />
        </div>
    );
}

Table.propType = {
    products: PropTypes.any,
    loading: PropTypes.any,
    refundableHandle: PropTypes.any,
    productStatus: PropTypes.any,
    dataDelete: PropTypes.any,
    page: PropTypes.any,
    limit: PropTypes.any,
    totalPage: PropTypes.any,
    handlePageChange: PropTypes.any,
}

export default Table;
