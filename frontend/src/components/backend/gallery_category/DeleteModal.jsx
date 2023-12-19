import { PropTypes } from 'prop-types';

const DeleteModal = ({ galleryCategoryId, GCId, deleteModalClose, Delete }) => {
    return (
        <div className="modal" id="delete" tabIndex="-1">
            <div className="modal-dialog  modal-dialog-centered modal-sm modal-fullscreen-md-down">
                <div className="modal-content">
                    <div className="modal-body px-5 py-4">
                        <div className="text-end">
                        </div>
                        <div className="text-center">
                            <span className="border border-2 border-warning fs-4 px-2 py-0 text-warning rounded-circle">!</span>
                            <h4 className="text-warning">Delete</h4>
                        </div>
                        <input type="hidden" ref={galleryCategoryId} defaultValue={GCId} />
                        <p className="text-center text-muted">Are you sure want ot delete this data?</p>
                        <div className=" text-center">
                            <button type="button" ref={deleteModalClose} data-bs-dismiss="modal" className="btn btn-sm btn-secondary me-2">Close</button>
                            <button type="button" onClick={Delete} className="btn btn-sm btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

DeleteModal.propTypes = {
    galleryCategoryId: PropTypes.any,
    GCId: PropTypes.any, 
    deleteModalClose: PropTypes.any, 
    Delete: PropTypes.any
}

export default DeleteModal;
