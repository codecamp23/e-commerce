import { PropTypes } from 'prop-types';

const EditForm = ({ color, colorId, name, color_code, Edit, editForm, errors }) => {
    return (
        <div className="col-md-6">
            <div className="card rounded-1 pt-1">
                <form onSubmit={Edit} ref={editForm} className="card-body px-4 pt-4">
                    <input type="hidden" ref={colorId} defaultValue={color.id} />
                    <div className="row pb-3">
                        <div className="col-md-3">
                            <label htmlFor="name" className="fw-normal pb-1">Name</label>
                        </div>
                        <div className="col-md-9">
                            <input type="text" ref={name} className={errors.name ? " form-control is-invalid text-muted" : " form-control text-muted"} placeholder="Name" defaultValue={color.name} />
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-md-3">
                            <label htmlFor="color_code" className="fw-normal pb-1 text-capitalize">Color Code</label>
                        </div>
                        <div className="col-md-9">
                            <input type="text" ref={color_code} className={errors.color_code ? "is-invalid form-control text-muted" : " form-control text-muted"} placeholder="Color Code" defaultValue={color.color_code} />
                        </div>
                    </div>
                    <div className=" text-end">
                        <button type="submit" className="btn btn-info text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

EditForm.propTypes = {
    color: PropTypes.any,
    colorId: PropTypes.any,
    name: PropTypes.any,
    color_code: PropTypes.any,
    Edit: PropTypes.any,
    editForm: PropTypes.any,
    errors: PropTypes.any,
}

export default EditForm;
