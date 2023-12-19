 import { PropTypes } from 'prop-types';

const Table = ({ loading, galleryCategories, edit, openDeleteModal }) => {
    return (
        <div className="col-md-8">
            <div className="card rounded-1">
                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4 d-flex justify-content-between align-items-center'>
                    <span className="fs-6 fw-normal text-capitalize">gallery category</span>
                    <div>
                        <input type="search" name='search' id='search' className="form-control" placeholder="Search gallery category ..." />
                    </div>
                </div>
                <div className="card-body px-4">
                    <div className="table-responsive">
                        <table className="table table-sm table-hover">
                            <thead>
                                <tr className="text-center">
                                    <th style={{ fontSize: "12px", fontWeight: "500" }}>#</th>
                                    <th style={{ fontSize: "12px", fontWeight: "500" }}>Gallery Category</th>
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
                                </tr>) : (galleryCategories.map((galleryCategory, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="text-muted py-3">{index + 1}</td>
                                        <td className="text-muted py-3">{galleryCategory.name}</td>
                                        <td className="text-muted py-3">
                                            <button type="button" onClick={() => edit(galleryCategory.id)} className="btn btn-sm btn-outline-primary p-0 ps-2 pb-1 rounded-circle" data-bs-toggle="modal" data-bs-target="#edit">
                                                <i className="lni lni-pencil-alt" style={{ fontSize: "13px" }} />
                                            </button>
                                            <button type="button" onClick={() => openDeleteModal(galleryCategory.id)} className='btn btn-sm btn-outline-danger p-0 ps-2 pb-1 rounded-circle ms-1' data-bs-toggle="modal" data-bs-target="#delete">
                                                <i className="lni lni-trash" style={{ fontSize: "13px" }}></i>
                                            </button>
                                        </td>
                                    </tr>
                                )))}
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
    loading: PropTypes.any,
    galleryCategories: PropTypes.any,
    edit: PropTypes.any,
    openDeleteModal: PropTypes.any,
}

export default Table;
