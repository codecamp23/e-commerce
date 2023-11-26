import { useEffect } from 'react';
import demo from '../../../assets/backend/images/demo.png';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.css';
import '../../../assets/backend/plugins/simplebar/css/simplebar.css';
import '../../../assets/backend/plugins/metismenu/css/metisMenu.min.css';
import '../../../assets/backend/css/bootstrap.min.css';
import '../../../assets/backend/css/bootstrap-extended.css';
import '../../../assets/backend/css/app.css';
import '../../../assets/backend/css/icons.css';
import '../../../assets/backend/css/dark-theme.css';
import '../../../assets/backend/css/semi-dark.css';
import '../../../assets/backend/css/header-colors.css';
import '../../../assets/backend/css/header-colors.css';
// js
import '../../../assets/backend/js/bootstrap.bundle.min.js';
import '../../../assets/backend/js/jquery.min.js'
import '../../../assets/backend/plugins/simplebar/js/simplebar.min.js';
import '../../../assets/backend/plugins/metismenu/js/metisMenu.min.js';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.min.js';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-world-mill-en.js';
import '../../../assets/backend/plugins/chartjs/js/chart.js';
import '../../../assets/backend/js/index.js';
import '../../../assets/backend/js/app.js';
import BrandContext from './../../../context/backend/BrandContext';
import MainContext from './../../../context/backend/MainContext';
import Table from './../../../components/backend/brand/Table.jsx';
import AddForm from './../../../components/backend/brand/AddForm.jsx';
import ImageUploader from './../../../components/backend/brand/ImageUploader';

const Brand = () => {
    const { getBrands, loading, brands, name, Image, meta_title, meta_des, Add, errors, errorHandle  } = BrandContext();
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
                            <Table loading={loading} brands={brands} />
                            <AddForm demo={demo} image={image} removeImage={removeImage} imageCount={imageCount} name={name} Image={Image} meta_title={meta_title} meta_des={meta_des} Add={Add} errors={errors} errorHandle={errorHandle}  />
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