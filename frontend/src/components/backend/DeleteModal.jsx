import { PropTypes } from 'prop-types';

const DeleteModal = ({ brandId, BId, closeDeleteModal, Delete }) => {
    return (
        <div className="modal" id="delete" tabIndex="-1">
            <div className="modal-dialog  modal-dialog-centered modal-sm">
                <div className="modal-content">
                    <div className="modal-body px-5 pt-4">
                        <div className="text-end">
                        </div>
                        <div className="text-center">
                            <input type="hidden" ref={brandId} defaultValue={BId} />
                            <span className="border border-2 border-warning fs-4 px-2 py-0 text-warning rounded-circle">!</span>
                            <h4 className="text-warning">Delete</h4>
                        </div>
                        <p className="text-center">Are you sure want ot delete this data?</p>
                        <div className=" text-center">
                            <button type="button" ref={closeDeleteModal} data-bs-dismiss="modal" className="btn btn-sm btn-secondary me-2">Close</button>
                            <button type="button" onClick={() => Delete()} className="btn btn-sm btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

DeleteModal.propTypes = {
    brandId: PropTypes.any,
    BId: PropTypes.any,
    closeDeleteModal: PropTypes.any,
    Delete: PropTypes.any,
}

export default DeleteModal;
