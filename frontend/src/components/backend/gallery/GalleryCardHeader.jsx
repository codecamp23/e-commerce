import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const GalleryCardHeader = ({ handleDeleteSelected, getGalleryWithCategory, galleryCategories, setSearch, onChangeSeach }) => {
    return (
        <div className="px-4 py-2 border border-top-0 border-end-0 border-start-0 border-bottom-1 border-light">
            <div className="row align-items-center">
                <div className="col-md-2">
                    <div className="d-md-block d-none">All files</div>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="d-flex justify-content-md-end justify-content-between align-items-center py-md-0 py-2 ps-md-0 ps-1">
                                <div className="d-md-none d-block">
                                    <div>All files</div>
                                </div>
                                <div className="d-flex">
                                    <button type="button" onClick={() => handleDeleteSelected()} className="btn btn-danger me-2 text-capitalize">delete all</button>
                                    <Link to="/admin/gallery-trust-bin" className="btn btn-light me-2">
                                        Trsut Bin
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 pb-md-0 pb-2">
                            <select name="" id="" onChange={getGalleryWithCategory} className=" form-control text-muted">
                                <option value="">All</option>
                                {galleryCategories.map((gallerycategory, index) => (
                                    <option value={gallerycategory.id} key={index}>{gallerycategory.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-end">
                                <input type="text" onChange={(e) => setSearch(e.target.value)} className=" form-control me-1" placeholder="Search Files" />
                                <button type="button" onClick={onChangeSeach} className="btn btn-info text-light">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

GalleryCardHeader.propTypes = {
    handleDeleteSelected: PropTypes.any, 
    getGalleryWithCategory: PropTypes.any, 
    galleryCategories: PropTypes.any, 
    setSearch: PropTypes.any, 
    onChangeSeach: PropTypes.any
}

export default GalleryCardHeader;
