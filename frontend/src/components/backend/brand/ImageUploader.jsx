const ImageUploader = (props) => {
    return (
        <div className="modal fade" id="imageUploader" tabIndex="-1">
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
                        <button type="button" ref={props.imageUploadModalClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-5 py-4">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-select-file" role="tabpanel" aria-labelledby="pills-select-file-tab" tabIndex={0}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <select onChange={props.galleryByCategory} className="form-control pt-2 px-4 text-muted">
                                            <option value="">All</option>
                                            {props.galleryCategories.map((galleryCategory) => (<option key={galleryCategory.id} value={galleryCategory.id}>{galleryCategory.name}</option>))}
                                        </select>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="row justify-content-end">
                                            <div className="col-md-3">
                                                <input type="search" className="form-control pt-2 px-4" onChange={props.onGallerySearch} placeholder="Search..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            {props.galleries.length > 0 ? props.galleries.map((gallery) => (<div key={gallery.id} className="col-lg-2 col-md-3 col-sm-4 col-6" onClick={() => props.selectImage(gallery.id, `${props.url}/upload/images/gallery/${gallery.image}`)}>
                                                <div className={gallery.id === props.galleryId ? "card px-2 py-2 border-2 border-info" : "card px-2 py-2"}>
                                                    <img src={`${props.url}/upload/images/gallery/${gallery.image}`} className="rounded-top" style={{ widht: "100%", height: "10em" }} alt="..." />

                                                    <div className='pt-2'>
                                                        <div>{gallery.image}</div>
                                                        <small>size: {gallery.size}</small>
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
                                <button type="button" onClick={() => props.pageHandle(props.currentPage, 'prev')} className={props.currentPage === 1 ? "prev me-1 ms-3 disabled" : "prev me-1 ms-3"}>Prev</button>
                                <button type="button" onClick={() => props.pageHandle(props.currentPage, 'next')} className={props.currentPage === props.lastPage ? "next me-1 disabled" : "next me-1"}>Next</button>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn bg-info text-light" onClick={() => props.addFiles()}>Add Files</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageUploader;
