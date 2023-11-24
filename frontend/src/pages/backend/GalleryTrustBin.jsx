import { useEffect } from 'react';
import GalleryContext from '../../context/backend/GalleryContext';
import { Link } from 'react-router-dom';
import Pagination from '../../pagination/backend/Pagination';
import '../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.css';
import '../../assets/backend/plugins/simplebar/css/simplebar.css';
import '../../assets/backend/plugins/metismenu/css/metisMenu.min.css';
import '../../assets/backend/css/bootstrap.min.css';
import '../../assets/backend/css/bootstrap-extended.css';
import '../../assets/backend/css/app.css';
import '../../assets/backend/css/icons.css';
import '../../assets/backend/css/dark-theme.css';
import '../../assets/backend/css/semi-dark.css';
import '../../assets/backend/css/header-colors.css';
import '../../assets/backend/css/header-colors.css';
// js
import '../../assets/backend/js/bootstrap.bundle.min.js';
import '../../assets/backend/js/jquery.min.js'
import '../../assets/backend/plugins/simplebar/js/simplebar.min.js';
import '../../assets/backend/plugins/metismenu/js/metisMenu.min.js';
import '../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.min.js';
import '../../assets/backend/plugins/vectormap/jquery-jvectormap-world-mill-en.js';
import '../../assets/backend/plugins/chartjs/js/chart.js';
import '../../assets/backend/js/index.js';
import '../../assets/backend/js/app.js';

const GalleryTrustBin = () => {
    const { getTrustBinGalleries, trustBinGalleries, imageURL, search, gallery, galleryCategory, DetailImageDownload, fileImage, deletePermanently, getTrustBinDetailInfo, trustBinTotalPage, page, limit, handleTrustBinPageChange, selectAll, selectedGalleries, handleCheckboxChangeTrustBin, handleSelectAllChangeInTrustBin, handleRestoreSelected, handlePermanentlyDeleteSelected, onChangeSeachTrustBin, setSearch } = GalleryContext();

    useEffect(() => {
        getTrustBinGalleries(page, search);
    }, []);

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between py-2 align-items-center">
                            <h5 className="fw-semibold text-capitalize">All trust bin files</h5>
                        </div>
                        <div className="card">
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
                            <div className=" card-body px-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"
                                                checked={selectAll}
                                                onChange={handleSelectAllChangeInTrustBin} />
                                            <label className="form-check-label text-capitalize fw-normal text-muted" htmlFor="flexCheckDefault">
                                                select all
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 pt-3 pb-2">
                                        <div className="row">
                                            {trustBinGalleries.map((gallery) => (
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
                                                            <div className='mt-2'>{gallery.name}</div>
                                                            <small>size: {gallery.size}kb</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Pagination totalPage={trustBinTotalPage} page={page} limit={limit} siblings={1} onPageChange={handleTrustBinPageChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="offcanvas offcanvas-end" tabIndex={-1} id="detailInfo" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border border-top-0 border-end-0 border-start-0 border-bottom-1 border-light">
                    <h5 className="offcanvas-title ps-2" id="offcanvasRightLabel">File Info</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body ps-4">
                    <div>
                        <label htmlFor="filename fw-normal" style={{ fontSize: '.9em' }}>File Name</label>
                        <input type="text" value={gallery.name} className=' form-control mt-1' disabled />
                    </div>
                    <div className='pt-3'>
                        <label htmlFor="filename fw-normal" style={{ fontSize: '.9em' }}>Gallery Category</label>
                        <input type="text" value={galleryCategory.name} className=' form-control mt-1' disabled />
                    </div>
                    <div className='pt-3'>
                        <label htmlFor="filename fw-normal" style={{ fontSize: '.9em' }}>File Type</label>
                        <input type="text" value={gallery.file_type} className=' form-control mt-1' disabled />
                    </div>
                    <div className='pt-3'>
                        <label htmlFor="filename fw-normal" style={{ fontSize: '.9em' }}>File Size</label>
                        <input type="text" value={`${gallery.size}kb`} className=' form-control mt-1' disabled />
                    </div>
                    <div className='pt-3 text-center'>
                        <button type="button" onClick={() => DetailImageDownload(gallery.image)} className="btn btn-secondary px-5 py-2">Download</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GalleryTrustBin;
