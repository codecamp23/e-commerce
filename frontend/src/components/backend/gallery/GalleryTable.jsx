import React from 'react';
import { PropTypes } from 'prop-types';

const GalleryTable = ({ galleries, imageURL, selectAll, selectedGalleries, handleCheckboxChange, getDetailInfo, imageDownload, handleCopyClick, linkRef, deleteGallery, getGalleryName }) => {
    return (
        <React.Fragment>
            {galleries.map((gallery) => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={gallery.id}>
                    <div className="card card-body position-relative">
                        <img src={`${imageURL}/upload/images/gallery/${gallery.image}`} style={{ widht: "100%", height: "9em" }} alt="..." />
                        <div className="form-check position-absolute left-0">
                            <input className="form-check-input" type="checkbox" checked={selectAll || selectedGalleries.includes(gallery.id)} onChange={() => handleCheckboxChange(gallery.id)} id="flexCheckDefault" />
                        </div>
                        <div className="position-absolute end-0 pe-3">
                            <div className='btn-group'>
                                <i className="lni lni-radio-button bg-light px-1 py-1 rounded" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button className="dropdown-item" onClick={() => getDetailInfo(gallery.id)} type="button" data-bs-toggle="offcanvas" data-bs-target="#detailInfo" aria-controls="offcanvasRight">
                                            <i className="lni lni-question-circle me-1"></i>Details Info
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => imageDownload(gallery.image)} type="button">
                                            <i className="lni lni-download me-1"></i>
                                            Download
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleCopyClick()} className="dropdown-item" type="button">
                                            <input type="hidden" value={`${imageURL}/upload/images/gallery/${gallery.image}`} ref={linkRef} />
                                            <i className="lni lni-clipboard me-1"></i>
                                            Copy Link
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => deleteGallery(gallery.id)} className="dropdown-item" type="button">
                                            <i className="lni lni-trash me-1"></i>
                                            Delete
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
            ))}
        </React.Fragment>
    );
}

GalleryTable.propTypes = {
    galleries: PropTypes.any, 
    imageURL: PropTypes.any, 
    selectAll:  PropTypes.any, 
    selectedGalleries:  PropTypes.any, 
    handleCheckboxChange:  PropTypes.any, 
    getDetailInfo:  PropTypes.any, 
    imageDownload:  PropTypes.any, 
    handleCopyClick:  PropTypes.any, 
    linkRef:  PropTypes.any, 
    deleteGallery:  PropTypes.any,
    getGalleryName:  PropTypes.any,
}

export default GalleryTable;
