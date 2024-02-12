import { useEffect } from 'react';
import GalleryContext from '../../context/backend/GalleryContext';
import Pagination from '../../pagination/backend/Pagination';
// assets
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
import GalleryTable from '../../components/backend/gallery/GalleryTable.jsx';
import GalleryCardHeader from '../../components/backend/gallery/GalleryCardHeader.jsx';
import AllSelectedArea from '../../components/backend/gallery/AllSelectedArea.jsx';
import GalleryAddModal from '../../components/backend/gallery/GalleryAddModal.jsx';
import GalleryImageDetailsInfo from '../../components/backend/gallery/GalleryImageDetailsInfo.jsx';

const Gallery = () => {
    const { getGalleryCategories, getAtFirstGalleries, getGalleries, galleryCategories, add, name, gallery_category_id, image, closeAddForm, addFrom, galleries, imageURL, getDetailInfo, gallery, galleryCategory, handleCopyClick, linkRef, DetailImageDownload, imageDownload, deleteGallery, errors, nameErrorsHandle, imageErrorsHandle, setNameErrorsHandle, setImageErrorsHandle, page, totalPage, limit, handlePageChange, getGalleryWithCategory, galleryCategoryId, search, setSearch, onChangeSeach, selectedGalleries, handleCheckboxChange, handleDeleteSelected, selectAll, handleSelectAllChange } = GalleryContext();

    useEffect(() => {
        getGalleryCategories();
        getAtFirstGalleries(page, galleryCategoryId, search);
        getGalleries();
        getGalleries();
    }, []);
    const closeAddModal = () => {
        closeAddForm.current.click();
        addFrom.current.reset();
    }

    const getGalleryName = (name) => {
        const maxLength = 13;
        if (name.length <= maxLength) {
            return name;
        } else {
            const truncatedName = name.slice(0, maxLength) + "... ";
            return truncatedName;
        }
    }

    // function handlePageChange(value) {
    //     if (value === "&laquo;" || value === "... ") {
    //         setPage(1);
    //     } else if (value === "&lsaquo;") {
    //         if (page !== 1) {
    //             setPage(page - 1);
    //         }
    //     } else if (value === "&rsaquo;") {
    //         if (page !== totalPage) {
    //             setPage(page + 1);
    //         }
    //     } else if (value === "&raquo;" || value === " ...") {
    //         setPage(totalPage);
    //     } else {
    //         setPage(value);
    //     }
    // }

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between py-2 align-items-center">
                            <h5 className="fw-semibold text-capitalize">All uploaded files</h5>
                            <button type="button" className="btn btn-info text-uppercase fw-normal text-light"
                                style={{ fontSize: "14px" }} data-bs-toggle="modal"
                                data-bs-target="#add">Uploaded New file</button>
                        </div>
                        <div className="card">
                            <GalleryCardHeader handleDeleteSelected={handleDeleteSelected} getGalleryWithCategory={getGalleryWithCategory} galleryCategories={galleryCategories} setSearch={setSearch} onChangeSeach={onChangeSeach} />
                            <div className=" card-body px-4">
                                <div className="row">
                                    <AllSelectedArea selectAll={selectAll} handleSelectAllChange={handleSelectAllChange} />
                                    <div className="col-md-12 pt-3 pb-2">
                                        <div className="row">
                                            <GalleryTable galleries={galleries} imageURL={imageURL} selectAll={selectAll} selectedGalleries={selectedGalleries} handleCheckboxChange={handleCheckboxChange} getDetailInfo={getDetailInfo} imageDownload={imageDownload} handleCopyClick={handleCopyClick} linkRef={linkRef} deleteGallery={deleteGallery} getGalleryName={getGalleryName} />
                                        </div>
                                    </div>
                                    {galleries.length > 0 && <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <GalleryAddModal add={add} addFrom={addFrom} name={name} setNameErrorsHandle={setNameErrorsHandle} nameErrorsHandle={nameErrorsHandle} gallery_category_id={gallery_category_id} galleryCategories={galleryCategories} image={image} setImageErrorsHandle={setImageErrorsHandle} imageErrorsHandle={imageErrorsHandle} closeAddModal={closeAddModal} closeAddForm={closeAddForm} errors={errors} /> 

            <GalleryImageDetailsInfo gallery={gallery} galleryCategory={galleryCategory} DetailImageDownload={DetailImageDownload} />

        </div>
    );
}

export default Gallery;
