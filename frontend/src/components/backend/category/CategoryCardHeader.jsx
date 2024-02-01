
import { PropTypes } from 'prop-types';

const CategoryCardHeader = ({ searchSize }) => {
    return (
        <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4 d-flex justify-content-between align-items-center'>
            <span className="fs-5 fw-normal">Categories</span>
            <div>
                <input type="search" onChange={searchSize} className="form-control" placeholder="Search category ..." />
            </div>
        </div>
    );
}

CategoryCardHeader.propTypes = {
    searchSize: PropTypes.any,
}

export default CategoryCardHeader;
