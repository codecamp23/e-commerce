import { PropTypes } from 'prop-types';
const EnEditForm = ({ categoryId, Name, BrandId, category, brands, editImageCount, imageCount, gallery, getGalleryName, Image, ImageName, ImageSize, ImageExtention, MetaTitle, MetaDes, dataUpdate, errors, removeImage, categoryImageRemove }) => {
    return (
        <div className="row px-4 pb-1 pt-1">
            <div className="col-md-12">
                <input type="hidden" ref={categoryId} defaultValue={category.id} />
                <div className="row pb-3">
                    <div className="col-md-3">Category Name</div>
                    <div className="col-md-9">
                        <input type="text" ref={Name} className={errors.name ? " form-control is-invalid" : " form-control"} placeholder='Brand Name' defaultValue={category.name} />
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-3">Brand</div>
                    <div className="col-md-9">
                        <select ref={BrandId} className={errors.brand_id ? " form-control is-invalid" : " form-control"}>
                            {brands.length > 0 && brands.map((brand, index) => (<option selected={category.brand_id === brand.id} key={index + 1} value={brand.id}>{brand.name}</option>))}
                        </select>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-3">Image</div>
                    <div className="col-md-9">
                        <div className="d-flex" data-bs-toggle="modal" data-bs-target="#imageUploader">
                            <button type="button" className="bg-body-secondary border-0 py-2 px-3 rounded rounded-end-0">Browser</button>
                            <button type="button" className="bg-light border-0 w-100 py-2 rounded rounded-start-0 text-start ps-3">{imageCount > 0 ? imageCount : editImageCount} Choose file</button>
                        </div>
                        {editImageCount > 0 && gallery.image === '' ? <div className="row pt-3">
                            <div className="col-md-3 col-lg-3 col-md-5 col-sm-4 col-6">
                                <div className="card px-2 pt-2 position-relative">
                                    <img src={category.image} style={{ width: "100%" }} alt="..." />
                                    <button type="button" onClick={() => categoryImageRemove()} className="btn btn-ms btn-light text-danger position-absolute rounded-circle end-0 top-0 px-0 ps-2 py-0 text-center" style={{ margin: "-.5rem -.5rem 0 0" }}>
                                        <i className="lni lni-close" style={{ fontSize: "12px" }}></i>
                                    </button>
                                    <div className="card-body px-0 py-1">
                                        <div style={{ fontSize: "13px" }}>{getGalleryName(category.image_name)}{category.image_extention}</div>
                                        <small>{category.image_size}kb</small>
                                    </div>
                                </div>
                            </div>
                        </div> : imageCount > 0 && gallery.image !== '' ? <div className="row pt-3">
                            <div className="col-lg-3 col-md-5 col-sm-4 col-6">
                                <div className="card px-2 pt-2 position-relative">
                                    <div className=" text-center">
                                        <img src={gallery.image} style={{ width: "100%" }} alt="..." />
                                    </div>
                                    <button type="button" className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 pe-0 pt-0 ps-1 pb-1 rounded-circle" style={{ margin: "-.5rem -.5rem 0 0" }} onClick={() => removeImage()}>
                                        <i className="lni lni-close fs-6"></i>
                                    </button>
                                    <div className="card-body py-1 px-1">
                                        <div>{getGalleryName(gallery.image_name)}{gallery.image_extention}</div>
                                        <small>{gallery.image_size}kb</small>
                                    </div>
                                </div>
                            </div>
                        </div> : ''}
                        <input type="hidden" ref={Image} defaultValue={gallery.image === '' ? editImageCount > 0 ? category.image : '' : imageCount > 0 ? gallery.image : ''} />
                        <input type="hidden" ref={ImageName} defaultValue={gallery.image === '' ? editImageCount > 0 ? category.image_name : '' : imageCount > 0 ? gallery.image_name : ''} />
                        <input type="hidden" ref={ImageSize} defaultValue={gallery.image === '' ? editImageCount > 0 ? category.image_size : '' : imageCount > 0 ? gallery.image_size : ''} />
                        <input type="hidden" ref={ImageExtention} defaultValue={gallery.image === '' ? editImageCount > 0 ? category.image_extention : '' : imageCount > 0 ? gallery.image_extention : ''} />
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-3">Meta Title</div>
                    <div className="col-md-9">
                        <input type="text" ref={MetaTitle} className='form-control' placeholder='Meta Title' defaultValue={category.meta_title} />
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-3">Meta Description</div>
                    <div className="col-md-9">
                        <textarea rows="9" ref={MetaDes} className='form-control' defaultValue={category.meta_des}></textarea>
                    </div>
                </div>
                <div className="row pb-3 text-end">
                    <div className="col-md-12">
                        <button type="button" onClick={() => dataUpdate(category.id)} className="btn btn-info text-white">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

EnEditForm.propTypes = {
    categoryId: PropTypes.any,
    Name: PropTypes.any,
    BrandId: PropTypes.any,
    category: PropTypes.any,
    brands: PropTypes.any,
    editImageCount: PropTypes.any,
    imageCount: PropTypes.any,
    gallery: PropTypes.any,
    getGalleryName: PropTypes.any,
    Image: PropTypes.any,
    ImageName: PropTypes.any,
    ImageSize: PropTypes.any,
    ImageExtention: PropTypes.any,
    MetaTitle: PropTypes.any,
    MetaDes: PropTypes.any,
    dataUpdate: PropTypes.any,
    errors: PropTypes.any,
    removeImage: PropTypes.any,
    categoryImageRemove: PropTypes.any,
}

export default EnEditForm;
