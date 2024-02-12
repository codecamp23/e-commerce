import { PropTypes } from 'prop-types';

const GalleryAddModal = ({ add, addFrom, name, setNameErrorsHandle, nameErrorsHandle, gallery_category_id, galleryCategories, image, setImageErrorsHandle, imageErrorsHandle, closeAddModal, closeAddForm, errors }) => {
    return (
        <div className="modal fade" id="add" tabIndex={-1}>
            <div className="modal-dialog modal-fullscreen-md-down">
                <div className="modal-content">
                    <div className="modal-header fs-5">
                        <h5 className='modal-title text-capitalize'>add new file</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={add} ref={addFrom} className="modal-body px-5 py-5">
                        <div className="pb-3">
                            <label htmlFor="name" className="fw-normal pb-1 text-capitalize">file name</label>
                            <input type="text" ref={name} onChange={() => setNameErrorsHandle(false)} className=" form-control" placeholder="File's Name" />
                            {errors.name && nameErrorsHandle === true ? <small className="text-danger">{errors.name}</small> : ''}
                        </div>
                        <div className="pb-3">
                            <label htmlFor="name" className="fw-normal pb-1 text-capitalize">file Category</label>
                            <select name="" id="" ref={gallery_category_id} className=" form-control">
                                {galleryCategories.map((galleryCategory) => (
                                    <option value={galleryCategory.id} key={galleryCategory.id}>{galleryCategory.name}</option>
                                ))}
                            </select>
                            {errors.gallery_category_id ? <small className="text-danger">{errors.gallery_category_id}</small> : ''}
                        </div>
                        <div className="pb-3">
                            <label htmlFor="name" className="fw-normal pb-1 text-capitalize">file</label>
                            <input type="file" ref={image} onChange={() => setImageErrorsHandle(false)} className=" form-control text-muted" />
                            {errors.image && imageErrorsHandle === true ? <small className="text-danger">{errors.image}</small> : ''}
                        </div>
                        <div className=" text-end">
                            <button type="button" onClick={closeAddModal} ref={closeAddForm} className='btn btn-danger me-2' data-bs-dismiss="modal" aria-label="Close">Close</button>
                            <button type="submit" className="btn btn-primary text-capitalize">add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

GalleryAddModal.propTypes = {
    add: PropTypes.any, 
    addFrom: PropTypes.any, 
    name: PropTypes.any, 
    setNameErrorsHandle: PropTypes.any, 
    nameErrorsHandle: PropTypes.any, 
    gallery_category_id: PropTypes.any, 
    galleryCategories: PropTypes.any, 
    image: PropTypes.any, 
    setImageErrorsHandle: PropTypes.any, 
    imageErrorsHandle: PropTypes.any, 
    closeAddModal: PropTypes.any, 
    closeAddForm: PropTypes.any, 
    errors: PropTypes.any
}

export default GalleryAddModal;
