import React, { useEffect } from 'react';
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
import '../../../assets/backend/js/app.js';
import '../../../main.css';
import BrandContext from './../../../context/backend/BrandContext';
import { useParams } from 'react-router-dom';
import ImageUploader from '../../../components/backend/ImageUploader.jsx';
import EnEditForm from '../../../components/backend/brand/EnEditForm.jsx';
const BrandEdit = () => {
    const { getBrand, brand, brandId, name, Image, ImageName, ImageSize, ImageExtention, meta_title, meta_des, Update, errors, editImageCount, getGalleries, galleries, URL, currentPage, lastPage, galleryByCategory, pageHandle, getGalleryCategories, galleryCategories, getGalleryCategoryId, selectImage, galleryId, imageUploadModalClose, onGallerySearch, search, gallery, setGallery, setImageCount, imageCount, setGalleryImage, GalleryImage, imageInfoForm, removeImage, brandImageRemove } = BrandContext();
    const { id } = useParams();

    useEffect(() => {
        new PerfectScrollbar(".app-container")
        getBrand(id)
        getGalleries(currentPage, getGalleryCategoryId, search);
        getGalleryCategories();
    }, [])

    const getGalleryName = (name) => {
        const maxLength = 3;
        if (name.length <= maxLength) {
            return name;
        } else {
            const truncatedName = name.slice(0, maxLength) + "... ";
            return truncatedName;
        }
    }

    return (
        <React.Fragment>
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="fw-semibold py-2">Brand Information</h5>
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <div className="card">

                                        <div className="brand_edit rounded">
                                            <ul className="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link py-3 rounded-bottom-0 active" id="pills-english-tab" data-bs-toggle="pill" data-bs-target="#pills-english" type="button" role="tab" aria-controls="pills-english" aria-selected="true">English</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link py-3 rounded-bottom-0" id="pills-bangla-tab" data-bs-toggle="pill" data-bs-target="#pills-bangla" type="button" role="tab" aria-controls="pills-bangla" aria-selected="false">Bangla</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-english" role="tabpanel" aria-labelledby="pills-english-tab" tabIndex={0}>
                                                    <EnEditForm brandId={brandId} name={name} brand={brand} editImageCount={editImageCount} imageCount={imageCount} gallery={gallery} getGalleryName={getGalleryName} Image={Image} ImageName={ImageName} ImageSize={ImageSize} ImageExtention={ImageExtention} meta_title={meta_title} meta_des={meta_des} Update={Update} errors={errors} removeImage={removeImage} brandImageRemove={brandImageRemove} />
                                                </div>

                                                <div className="tab-pane fade" id="pills-bangla" role="tabpanel" aria-labelledby="pills-bangla-tab" tabIndex={0}>bangla</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImageUploader galleryByCategory={galleryByCategory} galleryCategories={galleryCategories} galleries={galleries} selectImage={selectImage} galleryId={galleryId} url={URL} currentPage={currentPage} lastPage={lastPage} pageHandle={pageHandle} imageUploadModalClose={imageUploadModalClose} onGallerySearch={onGallerySearch} setGallery={setGallery} setImageCount={setImageCount} brandImageRemove={brandImageRemove} setGalleryImage={setGalleryImage} GalleryImage={GalleryImage} imageInfoForm={imageInfoForm} />
        </React.Fragment>
    );
}

export default BrandEdit;
