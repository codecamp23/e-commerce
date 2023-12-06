import { useEffect, useState } from 'react';
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
import '../../../assets/backend/js/app.js';
import BrandContext from './../../../context/backend/BrandContext';
import Table from './../../../components/backend/brand/Table.jsx';
import AddForm from './../../../components/backend/brand/AddForm.jsx';
import ImageUploader from '../../../components/backend/ImageUploader.jsx';
import DeleteModal from '../../../components/backend/DeleteModal.jsx';

const Brand = () => {
    const { getAtFirstBrands, getBrands, page, limit, totalPage, handlePageChange, loading, brands, brandId, name, Image, ImageName, ImageSize, ImageExtention, meta_title, meta_des, Add, Delete, searchBrand, brandSearchHandle, closeDeleteModal, addForm, errors, errorHandle, getGalleries, galleries, URL, currentPage, lastPage, galleryByCategory, pageHandle, getGalleryCategories, galleryCategories, getGalleryCategoryId, selectImage, galleryId, addFiles, gallery, imageUploadModalClose, imageCount, onGallerySearch, search, GalleryImage, setGallery, setImageCount, removeImage  } = BrandContext();
    const [BId, setBId] = useState('');
    useEffect(() => {
        getAtFirstBrands(page, searchBrand);
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
                            <Table loading={loading} brands={brands} setBId={setBId} page={page} limit={limit} totalPage={totalPage} handlePageChange={handlePageChange} brandSearchHandle={brandSearchHandle} />
                            <AddForm addForm={addForm} demo={demo} gallery={gallery} imageCount={imageCount} name={name} Image={Image} ImageName={ImageName} ImageSize={ImageSize} ImageExtention={ImageExtention} meta_title={meta_title} meta_des={meta_des} Add={Add} errors={errors} errorHandle={errorHandle} setGallery={setGallery} setImageCount={setImageCount} removeImage={removeImage}  />
                        </div>
                    </div>
                </div>
            </div>


            <ImageUploader galleryByCategory={galleryByCategory} galleryCategories={galleryCategories} galleries={galleries} selectImage={selectImage} galleryId={galleryId} url={URL} currentPage={currentPage} lastPage={lastPage} pageHandle={pageHandle} addFiles={addFiles} imageUploadModalClose={imageUploadModalClose} onGallerySearch={onGallerySearch} GalleryImage={GalleryImage} setGallery={setGallery} setImageCount={setImageCount} />

            {/* <div className="modal fade" id="" tabIndex="-1">
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
            </div> */}
            <DeleteModal brandId={brandId} BId={BId} closeDeleteModal={closeDeleteModal} Delete={Delete} />
        </div>
    );
}

export default Brand;