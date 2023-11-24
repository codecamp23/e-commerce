import GalleryCategoryContext from "../../../context/backend/GalleryCategoryContext";

const GalleryCategoryEdit = (props) => {
    const galleryCategory = props.galleryCategory;
    const { update, galleryCategoryId, galleryCategoryName, errors, updateForm, closeUpdateModal, getGalleryCategory } = GalleryCategoryContext();
    
    const cancel = () => {
        updateForm.current.reset();
    }

    // const reloadTable = () => {
    //     getGalleryCategory();
    // }

    return (
        <div className="modal fade" id="edit" tabIndex="-1">
            <div className="modal-dialog modal-fullscreen-md-down">
                <div className="modal-content">
                    <div className="modal-header fs-5">
                        <h5 className='modal-title '>Edit Gallery Category</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form ref={updateForm} onSubmit={update} className="modal-body px-5 py-5">
                        <div className="pb-3">
                            <input type="text" ref={galleryCategoryId} defaultValue={galleryCategory.id} />
                            <label htmlFor="name" className="fw-normal pb-1">Name</label>
                            <input type="text" ref={galleryCategoryName} className=" form-control" placeholder="Gallery Category Name" defaultValue={galleryCategory.name} />
                            {errors.name ? <small className=" text-danger">{errors.name}</small> : ''}
                        </div>
                        <div className=" text-end">
                            <button type="button" onClick={() => cancel()} ref={closeUpdateModal} className="btn btn-danger me-1" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GalleryCategoryEdit;

