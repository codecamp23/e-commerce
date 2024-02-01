import React, { useEffect } from "react";
import CreateForm from "../../../components/backend/category/CreateForm";
import CategoryContext from './../../../context/backend/CategoryContext';
import ImageUploader from "../../../components/backend/ImageUploader";

const CategoryCreate = () => {
    const { /*this methods for gallery start*/ getGalleries, gallery, getGalleryCategories, getGalleryCategoryId, search, galleryByCategory, galleryCategories, galleries, selectImage, galleryId, URL, currentPage, lastPage, pageHandle, imageUploadModalClose, onGallerySearch, setGallery, setImageCount, imageCount, removeImage, setGalleryImage, GalleryImage, Image, ImageName, ImageSize, ImageExtention, /*this methods for gallery end*/ getBrands, brands, Name, BrandId, MetaTitle, MetaDes, AddData, errors } = CategoryContext();
    useEffect(() => {
        // this function for gallery start
        getGalleries(currentPage, getGalleryCategoryId, search);
        getGalleryCategories();
        // this function for gallery end
        getBrands()
    }, [])
    return (
        <React.Fragment>
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="row justify-content-center ">
                        <div className="col-md-7">
                            <div className="card rounded-1">
                                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-4 d-flex justify-content-between align-items-center'>
                                    <span className="fs-5 fw-normal">Category Information</span>
                                </div>
                                <CreateForm /*this methods for gallery start*/ imageCount={imageCount} gallery={gallery} Image={Image} ImageName={ImageName} ImageSize={ImageSize} ImageExtention={ImageExtention} removeImage={removeImage}  /*this methods for gallery end*/ brands={brands} Name={Name} BrandId={BrandId} MetaTitle={MetaTitle} MetaDes={MetaDes} AddData={AddData} errors={errors} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* gallery */}
            <ImageUploader galleryByCategory={galleryByCategory} galleryCategories={galleryCategories} galleries={galleries} selectImage={selectImage} galleryId={galleryId} url={URL} currentPage={currentPage} lastPage={lastPage} pageHandle={pageHandle} imageUploadModalClose={imageUploadModalClose} onGallerySearch={onGallerySearch} setGallery={setGallery} setImageCount={setImageCount} setGalleryImage={setGalleryImage} GalleryImage={GalleryImage} />
        </React.Fragment>
    );
}

export default CategoryCreate;
