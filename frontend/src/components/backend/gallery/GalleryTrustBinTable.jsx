import React from 'react';
import { PropTypes } from 'prop-types';

const GalleryTrustBinTable = ({ trustBinGalleries, imageURL, selectAll, selectedGalleries, handleCheckboxChangeTrustBin, getTrustBinDetailInfo, fileImage, deletePermanently, getGalleryName }) => {
    return (
        <React.Fragment>
            {trustBinGalleries.length > 0 ? trustBinGalleries.map((gallery) => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={gallery.id}>
                    <div className="card card-body position-relative">
                        <img src={`${imageURL}/upload/images/gallery/${gallery.image}`} style={{ widht: "100%", height: "9em" }} alt="..." />
                        <div className="form-check position-absolute left-0">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" checked={selectAll || selectedGalleries.includes(gallery.id)} onChange={() => handleCheckboxChangeTrustBin(gallery.id)} />
                        </div>
                        <div className="position-absolute end-0 pe-3">
                            <div className='btn-group'>
                                <i className="lni lni-radio-button bg-light px-1 py-1 rounded" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button className="dropdown-item" onClick={() => getTrustBinDetailInfo(gallery.id)} type="button" data-bs-toggle="offcanvas" data-bs-target="#detailInfo" aria-controls="offcanvasRight">
                                            <i className="lni lni-question-circle me-1"></i>Details Info
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => fileImage(gallery.id)} type="button">
                                            <i className="lni lni-spinner-arrow me-1"></i>
                                            Restore
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => deletePermanently(gallery.id)} className="dropdown-item" type="button">
                                            <i className="lni lni-trash me-1"></i>
                                            Delete Permanently
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='mt-2'>{getGalleryName(gallery.name)}{gallery.extention}</div>
                            <small>size: {gallery.size}kb</small>
                        </div>
                    </div>
                </div>
            )) : <div className="col-md-12 text-center">
                        <h4>Gallery Trust Bin Not Found</h4>
            </div>}
        </React.Fragment>
    );
}

GalleryTrustBinTable.propTypes = {
    trustBinGalleries: PropTypes.any, 
    imageURL: PropTypes.any, 
    selectAll: PropTypes.any, 
    selectedGalleries: PropTypes.any, 
    handleCheckboxChangeTrustBin: PropTypes.any, 
    getTrustBinDetailInfo: PropTypes.any, 
    fileImage: PropTypes.any, 
    deletePermanently: PropTypes.any,
    getGalleryName: PropTypes.any
}

export default GalleryTrustBinTable;
