import { PropTypes } from 'prop-types';

const AddForm = ({ name, color_code, Add, addForm, errors }) => {
    return (
        <div className="col-md-4">
            <div className="card rounded-1">
                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4'>
                    <span className="fs-6 fw-normal text-capitalize">Add new Color</span>
                </div>
                <form onSubmit={Add} ref={addForm} className="card-body px-4">
                    <div className="pb-3">
                        <label htmlFor="name" className="fw-normal pb-1">Name</label>
                        <input type="text" ref={name} className={errors.name ? " form-control is-invalid" : " form-control"} placeholder="Name" />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="color_code" className="fw-normal pb-1 text-capitalize">Color Code</label>
                        <input type="text" ref={color_code} className={errors.color_code ? "is-invalid form-control" : " form-control"} placeholder="Color Code" />
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
    name: PropTypes.any,
    color_code: PropTypes.any, 
    Add: PropTypes.any, 
    addForm: PropTypes.any,
    errors: PropTypes.any,
}

export default AddForm;
