import { useEffect } from 'react';
import demo from '../../assets/backend/images/demo.png';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';
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
import BrandContext from '../../context/backend/BrandContext.jsx';
import ImageUploader from '../../components/backend/brand/ImageUploader.jsx';
import MainContext from '../../context/backend/MainContext.jsx';
import AddForm from '../../components/backend/brand/AddForm.jsx';

const Brand = () => {
    const { getBrands, loading, url, brands } = BrandContext();
    const { getGalleries, galleries, URL, currentPage, lastPage, galleryByCategory, pageHandle, getGalleryCategories, galleryCategories, getGalleryCategoryId, selectImage, galleryId, addFiles, image, imageUploadModalClose, removeImage, imageCount, onGallerySearch, search } = MainContext();
    useEffect(() => {
        getBrands();
        getGalleries(currentPage, getGalleryCategoryId, search);
        getGalleryCategories()
        new PerfectScrollbar(".app-container")
    }, [])

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="fw-semibold py-2">All Brands</h5>
                        <div className="row">
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
                                                            <td className="text-muted">{index + 1}</td>
                                                            <td className="text-muted">{brand.name}</td>
                                                            <td className="text-muted">
                                                                <img src={`${url}/upload/images/brands/${brand.image}`} style={{ width: "70px" }} alt="" />
                                                            </td>
                                                            <td className="text-muted">
                                                                <button type="button" className="btn btn-sm btn-outline-primary p-0 ps-2 pb-1 rounded-circle" data-bs-toggle="modal" data-bs-target="#edit">
                                                                    <i className="lni lni-pencil-alt" style={{ fontSize: "13px" }} />
                                                                </button>
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
                            <AddForm demo={demo} image={image} removeImage={removeImage} imageCount={imageCount} />
                        </div>
                    </div>
                </div>
            </div>


            <ImageUploader galleryByCategory={galleryByCategory} galleryCategories={galleryCategories} galleries={galleries} selectImage={selectImage} galleryId={galleryId} url={URL} currentPage={currentPage} lastPage={lastPage} pageHandle={pageHandle} addFiles={addFiles} imageUploadModalClose={imageUploadModalClose} onGallerySearch={onGallerySearch} />

            <div className="modal fade" id="" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen-md-down">
                    <div className="modal-content">
                        <div className="modal-header fs-5">
                            <h5 className='modal-title '>Edit Brand</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="modal-body px-5 py-5">
                            <div className="pb-3">
                                <label htmlFor="name" className="fw-normal pb-1">Name</label>
                                <input type="text" className=" form-control" placeholder="Brand Name" />
                            </div>
                            <div className="pb-3">
                                <div className="text-center">
                                    <img src={demo} style={{ width: "100px" }} className="d-none" alt="" />
                                </div>
                                <label htmlFor="name" className="fw-normal pb-1">Image</label>
                                <button type="button" className="btn btn-light w-100">Choose file</button>
                                <input type="hidden" />
                            </div>
                            <div className=" text-end">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal" id="delete" tabIndex="-1">
                <div className="modal-dialog  modal-dialog-centered modal-sm modal-fullscreen-md-down">
                    <div className="modal-content">
                        <div className="modal-body px-5 pt-4">
                            <div className="text-end">
                            </div>
                            <div className="text-center">
                                <span className="border border-2 border-warning fs-4 px-2 py-0 text-warning rounded-circle">!</span>
                                <h4 className="text-warning">Delete</h4>
                            </div>
                            <p className="text-center">Are you sure want ot delete this data?</p>
                            <div className=" text-center">
                                <button type="button" data-bs-dismiss="modal" className="btn btn-sm btn-secondary me-2">Close</button>
                                <button type="submit" className="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;