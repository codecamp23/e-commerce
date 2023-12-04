import PropTypes from 'prop-types';
const AddForm = ({ Add, name, Image, ImageName, ImageSize, ImageExtention, meta_title, meta_des, gallery, demo, imageCount, errors, addForm, removeImage }) => {
    const getGalleryName = (name) => {
        const maxLength = 11;
        if (name.length <= maxLength) {
            return name;
        } else {
            const truncatedName = name.slice(0, maxLength) + "... ";
            return truncatedName;
        }
    }

    return (
        <div className="col-md-4">
            <div className="card rounded-1">
                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4'>
                    <span className="fs-6 fw-normal text-capitalize">Add new Brand</span>
                </div>
                <form onSubmit={Add} ref={addForm} className="card-body px-4">
                    <div className="pb-3">
                        <label htmlFor="name" className="fw-normal pb-1">Name</label>
                        <input type="text" ref={name} className={errors.name ? " form-control is-invalid" : " form-control"} placeholder="Brand Name" />
                    </div>
                    <div className="pb-3">
                        <div className="text-center">
                            <img src={demo} style={{ width: "100px" }} className="d-none" alt="" />
                        </div>
                        <label htmlFor="name" className="fw-normal pb-1">Image <small>({imageCount})</small></label>
                        <div className="d-flex" data-bs-toggle="modal" data-bs-target="#imageUploader">
                            <button type="button" className="bg-body-secondary border-0 py-2 px-3 rounded rounded-end-0">Browser</button>
                            <button type="button" className="bg-light border-0 w-100 py-2 rounded rounded-start-0 text-start ps-3">Choose file</button>
                        </div>
                        {errors.image && <small className="text-danger">{errors.image}</small>}
                        <input type="hidden" ref={Image} defaultValue={gallery.image} />
                        <input type="hidden" ref={ImageName} defaultValue={gallery.image_name} />
                        <input type="hidden" ref={ImageSize} defaultValue={gallery.image_size} />
                        <input type="hidden" ref={ImageExtention} defaultValue={gallery.image_extention} />
                        {gallery.image && <div className="row justify-content-center pt-3">
                            <div className="col-md-6">
                                <div className="card position-relative">
                                    <div className=" text-center px-3 pt-2">
                                        <img src={gallery.image} style={{ width: "100%", height: "100px" }} alt="..." />
                                    </div>
                                    <button type="button" className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 pe-0 pt-0 ps-1 pb-1 rounded-circle" style={{ margin: "-.5rem -.5rem 0 0" }} onClick={() => removeImage()}>
                                        <i className="lni lni-close fs-6"></i>
                                    </button>
                                    <div className="card-body">
                                        <div>{getGalleryName(gallery.image_name)}{gallery.image_extention}</div>
                                        <small>{gallery.image_size}kb</small>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="pb-3">
                        <label htmlFor="meta_title" className="fw-normal pb-1 text-capitalize">Meta title</label>
                        <input type="text" ref={meta_title} className={errors.meta_title ? "is-invalid form-control" : " form-control"} placeholder="Meta Title" />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="meta_des" className="fw-normal pb-1 text-capitalize">Meta Description</label>
                        <textarea rows={4} ref={meta_des} className={errors.meta_description ? "is-invalid form-control" : " form-control"}></textarea>
                    </div>
                    <div className=" text-end">
                        <button type="submit" className="btn btn-info text-white">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

AddForm.propTypes = {
    addForm: PropTypes.any,
    Add: PropTypes.any,
    name: PropTypes.any,
    Image: PropTypes.any,
    ImageName: PropTypes.any,
    ImageSize: PropTypes.any,
    ImageExtention: PropTypes.any,
    meta_title: PropTypes.any,
    meta_des: PropTypes.any,
    image: PropTypes.any,
    demo: PropTypes.any,
    imageCount: PropTypes.any,
    gallery: PropTypes.any,
    setGallery: PropTypes.any,
    setImageCount: PropTypes.any,
    removeImage: PropTypes.any,
    errors: PropTypes.any,
}

export default AddForm;
