import PropTypes from 'prop-types';
const AddForm = ({ Add, name, Image, meta_title, meta_des, removeImage, image, demo, imageCount, errors }) => {
    return (
        <div className="col-md-4">
            <div className="card rounded-1">
                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4'>
                    <span className="fs-6 fw-normal text-capitalize">Add new Brand</span>
                </div>
                <form onSubmit={Add} className="card-body px-4">
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
                        <input type="hidden" ref={Image} defaultValue={image} />
                        {image && <div className="text-center position-relative mt-3">
                            <img src={image} style={{ width: "150px" }} alt="..." />
                            <button type="button" className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 pe-0 pt-0 ps-1 pb-1" onClick={removeImage}>
                                <i className="lni lni-close fs-6"></i>
                            </button>
                        </div>}
                    </div>
                    <div className="pb-3">
                        <label htmlFor="meta_title" className="fw-normal pb-1 text-capitalize">Meta title</label>
                        <input type="text" ref={meta_title} className={errors.meta_title ? "is-invalid form-control" : " form-control"} placeholder="Meta Title" />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="meta_des" ref={meta_des} className="fw-normal pb-1 text-capitalize">Meta Description</label>
                        <textarea rows={4} className={errors.meta_description ? "is-invalid form-control" : " form-control"}></textarea>
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
    Add: PropTypes.any,
    name: PropTypes.any,
    Image: PropTypes.any,
    meta_title: PropTypes.any,
    meta_des: PropTypes.any,
    removeImage: PropTypes.any,
    image: PropTypes.any,
    demo: PropTypes.any,
    imageCount: PropTypes.any,
    errors: PropTypes.any,
    otherProp: PropTypes.string.isRequired,
}

export default AddForm;
