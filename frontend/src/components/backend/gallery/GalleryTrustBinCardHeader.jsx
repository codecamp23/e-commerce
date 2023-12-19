import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const GalleryTrustBinCardHeader = ({ handleRestoreSelected, handlePermanentlyDeleteSelected, setSearch, onChangeSeachTrustBin }) => {
    return (
        <div className="px-4 py-2 border border-top-0 border-end-0 border-start-0 border-bottom-1 border-light">
            <div className="row align-items-center">
                <div className="col-md-2">
                    <div className="d-md-block d-none">All files</div>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="d-flex justify-content-md-end justify-content-between align-items-center py-md-0 py-2 ps-md-0 ps-1">
                                <div className="d-md-none d-block">
                                    <div>All files</div>
                                </div>
                                <div className="d-flex">
                                    <button type="button" className="btn btn-warning me-2 text-capitalize" onClick={handleRestoreSelected}>restore all</button>
                                    <button type="button" className="btn btn-danger me-2 text-capitalize" onClick={handlePermanentlyDeleteSelected}>delete all</button>
                                    <Link to="/admin/gallery" className="btn btn-light me-2">
                                        Gallery
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-end">
                                <input type="text" className=" form-control me-1" onChange={(e) => setSearch(e.target.value)} placeholder="Search Files" />
                                <button type="button" onClick={onChangeSeachTrustBin} className="btn btn-info">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

GalleryTrustBinCardHeader.propTypes = {
    handleRestoreSelected: PropTypes.any, 
    handlePermanentlyDeleteSelected: PropTypes.any, 
    setSearch: PropTypes.any, 
    onChangeSeachTrustBin: PropTypes.any
}

export default GalleryTrustBinCardHeader;
