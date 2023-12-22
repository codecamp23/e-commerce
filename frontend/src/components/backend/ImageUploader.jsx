import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
const ImageUploader = ({ imageUploadModalClose, galleryByCategory, galleryCategories, onGallerySearch, galleries, selectImage, galleryId, url, pageHandle, currentPage, lastPage, setGallery, brandImageRemove, setImageCount, GalleryImage }) => {
const {pathname} = useLocation();
const {id} = useParams();
    const getGalleryName = (name) => {
        const maxLength = 21;
        if (name.length <= maxLength) {
            return name;
        } else {
            const truncatedName = name.slice(0, maxLength) + "... ";
            return truncatedName;
        }
    }

    const addFiles = () => {
        setGallery({
            image: GalleryImage.url,
            image_name: GalleryImage.name,
            image_size: GalleryImage.size,
            image_extention: GalleryImage.extention
        });
        setImageCount(1);
        if (pathname === `/admin/brand/${id}`) {
            brandImageRemove()
        }
        imageUploadModalClose.current.click();
    }
    return (
        <div className="modal fade" id="imageUploader" tabIndex={-1}>
            <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header fs-5 bg-body-tertiary brand">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-select-file-tab" data-bs-toggle="pill" data-bs-target="#pills-select-file" type="button" role="tab" aria-controls="pills-select-file" aria-selected="true">Select File</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-upload-file-tab" data-bs-toggle="pill" data-bs-target="#pills-upload-file" type="button" role="tab" aria-controls="pills-upload-file" aria-selected="false">Upload File</button>
                            </li>
                        </ul>
                        <button type="button" ref={imageUploadModalClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-5 py-4">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-select-file" role="tabpanel" aria-labelledby="pills-select-file-tab" tabIndex={0}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <select onChange={galleryByCategory} className="form-control pt-2 px-4 text-muted">
                                            <option value="">All</option>
                                            {galleryCategories.map((galleryCategory) => (<option key={galleryCategory.id} value={galleryCategory.id}>{galleryCategory.name}</option>))}
                                        </select>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="row justify-content-end">
                                            <div className="col-md-3">
                                                <input type="search" className="form-control pt-2 px-4" onChange={onGallerySearch} placeholder="Search..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            {galleries.length > 0 ? galleries.map((gallery) => (<div key={gallery.id} className="col-lg-2 col-md-3 col-sm-4 col-6" onClick={() => selectImage(gallery.id, `${url}/upload/images/gallery/${gallery.image}`, gallery.name, gallery.size, gallery.extention)}>
                                                <div className={gallery.id === galleryId ? "card px-2 py-2 border-2 border-info" : "card px-2 py-2"}>
                                                    <img src={`${url}/upload/images/gallery/${gallery.image}`} className="rounded-top" style={{ widht: "100%", height: "10em" }} alt="..." />

                                                    <div className='pt-2'>
                                                        <div>{getGalleryName(gallery.name)}{gallery.extention}</div>
                                                        <small>size: {gallery.size}kb</small>
                                                    </div>
                                                </div>
                                            </div>)) : 
                                            <div className="col-md-12 text-center">
                                                <h3 className='fw-semibold fs-3'>Gallery Not Found</h3>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-upload-file" role="tabpanel" aria-labelledby="pills-upload-file-tab" tabIndex={0}>upload file</div>
                        </div>
                    </div>
                    <div className="modal-footer bg-body-tertiary d-flex justify-content-between px-4">
                        <div className="d-flex">
                            <div>
                                <div><small>0 file selected</small></div>
                                <button type="button" className=" bg-transparent border-0 text-info text-decoration-underline px-0">clear</button>
                            </div>
                            <div>
                                <button type="button" onClick={() => pageHandle(currentPage, 'prev')} className={currentPage === 1 ? "prev me-1 ms-3 disabled" : "prev me-1 ms-3"}>Prev</button>
                                <button type="button" onClick={() => pageHandle(currentPage, 'next')} className={currentPage === lastPage ? "next me-1 disabled" : "next me-1"}>Next</button>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn bg-info text-light" onClick={() => addFiles()}>Add Files</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ImageUploader.propTypes = {
    imageUploadModalClose: PropTypes.any,
    // imageInfoForm: PropTypes.any,
    galleryByCategory: PropTypes.any,
    galleryCategories: PropTypes.any,
    onGallerySearch: PropTypes.any,
    galleries: PropTypes.any,
    selectImage: PropTypes.any,
    galleryId: PropTypes.any,
    url: PropTypes.any,
    currentPage: PropTypes.any,
    lastPage: PropTypes.any,
    pageHandle: PropTypes.any,
    setGallery: PropTypes.any,
    setImageCount: PropTypes.any,
    brandImageRemove: PropTypes.any,
    addFiles: PropTypes.any,
    GalleryImage: PropTypes.any
}

export default ImageUploader;
