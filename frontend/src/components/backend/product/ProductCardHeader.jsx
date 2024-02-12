import { PropTypes } from 'prop-types';

const ProductCardHeader = ({ cardHeader, searchHandle }) => {
    return (
        <div className='row border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4 d-flex justify-content-between align-items-center'>
            <span className="col-lg-4 col-md-12 fs-5 fw-normal mb-md-0 mb-2">{cardHeader}</span>
            <div className='col-lg-8 col-md-12'>
                <div className="row ">
                    <div className="col-md-3 col-sm-6 pb-sm-0 mb-2">
                        <div className="dropdown">
                            <button className="text-muted bg-light border border-1 border-secondary-subtle w-100 text-start py-2 rounded ps-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bulk Action
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Delete Selected Items</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 pb-sm-0 mb-2"> 
                        <select name="" id="" className="form-select text-muted me-2">
                            <option value="">Select</option>
                        </select>
                    </div>
                    <div className="col-md-3 col-sm-6 pb-sm-0 mb-2"> 
                        <select name="" id="" className="form-select text-muted me-2">
                            <option value="">Sort By</option>
                        </select>
                    </div>
                    <div className="col-md-3 col-sm-6 pb-sm-0 mb-2">
                        <input type="search" onChange={searchHandle} className="form-control" placeholder="Type & Enter" /> 
                    </div>
                </div> 
            </div>
        </div>
    );
}

ProductCardHeader.propTypes = {
    cardHeader: PropTypes.any,
    searchHandle: PropTypes.any,
}

export default ProductCardHeader;
