import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Table = ({ loading, brands }) => {
    return (
        <div className="col-md-8">
            <div className="card rounded-1">
                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4 d-flex justify-content-between align-items-center'>
                    <span className="fs-6 fw-normal">Brand</span>
                    <div>
                        <input type="search" name='search' id='search' className="form-control" placeholder="Search banrd ..." />
                    </div>
                </div>
                <div className="card-body px-4">
                    <div className="table-responsive">
                        <table className="table table-sm table-hover">
                            <thead>
                                <tr className="text-center">
                                    <th style={{ fontSize: "12px", fontWeight: "500" }}>#</th>
                                    <th style={{ fontSize: "12px", fontWeight: "500" }}>Brand Name</th>
                                    <th style={{ fontSize: "12px", fontWeight: "500" }}>Brand Image</th>
                                    <th style={{ fontSize: "12px", fontWeight: "500" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody className="fw-normal" style={{ fontSize: "13px" }}>
                                {loading === false ? (<tr>
                                    <td colSpan="4" className="py-3">
                                        <div className="text-center">
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>

                                    </td>
                                </tr>) : (brands.length > 0 ? brands.map((brand, index) => (
                                    <tr key={index} className="py-3 text-center">
                                        <td className="text-muted py-md-3 py-0">{index + 1}</td>
                                        <td className="text-muted py-md-3 py-0">{brand.name}</td>
                                        <td className="text-muted">
                                            <img src={brand.image} style={{ width: "60px", height: "50px" }} alt="" />
                                        </td>
                                        <td className="text-muted py-md-3 py-0">
                                            <Link to={"/admin/brand/"+brand.id} className="btn btn-sm btn-outline-primary p-0 ps-2 pb-1 rounded-circle">
                                                <i className="lni lni-pencil-alt" style={{ fontSize: "13px" }} />
                                            </Link>
                                            <button type="button" className='btn btn-sm btn-outline-danger p-0 ps-2 pb-1 rounded-circle ms-1' data-bs-toggle="modal" data-bs-target="#delete">
                                                <i className="lni lni-trash" style={{ fontSize: "13px" }}></i>
                                            </button>
                                        </td>
                                    </tr>
                                )) : <tr>
                                    <td colSpan="4" className="py-2 text-center">
                                        <h6>Brands Not Found</h6>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </div>
    );
}

Table.propTypes = {
    brands: PropTypes.any,
    loading: PropTypes.any,
    otherProp: PropTypes.string.isRequired,
}

export default Table;
