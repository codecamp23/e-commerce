import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="fw-semibold py-2 d-flex justify-content-between align-items-center ">
                            <h5>All Categories</h5>
                            <Link to="/admin/category-create" className="btn btn-info rounded-5 px-4 py-2 text-light ">Add New Category</Link>
                        </div>
                        <div className="row pt-2">
                            <div className="col-md-12">
                                <div className="card rounded-1">
                                    <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4 d-flex justify-content-between align-items-center'>
                                        <span className="fs-5 fw-normal">Categories</span>
                                        <div>
                                            <input type="search" className="form-control" placeholder="Search category ..." />
                                        </div>
                                    </div>
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
                                                    <tr className="py-3 text-center">
                                                        <td className="text-muted py-md-3 py-0"></td>
                                                        <td className="text-muted py-md-3 py-0"></td>
                                                        <td className="text-muted py-md-3 py-0"></td>
                                                        <td className="text-muted py-md-3 py-0"></td>
                                                        <td className="text-muted py-md-3 py-0"></td>
                                                        <td className="text-muted py-md-3 py-0"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
