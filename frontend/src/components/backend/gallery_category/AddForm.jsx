import { PropTypes } from 'prop-types';

const AddForm = ({ galleryCategoryAdd, from, handleName, errors }) => {
    return (
        <div className="col-md-4">
            <div className="card rounded-1">
                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4'>
                    <span className="fs-6 fw-normal text-capitalize">Add new gallery category</span>
                </div>
                <form onSubmit={galleryCategoryAdd} ref={from} className="card-body px-4">
                    <div className="pb-3">
                        <label htmlFor="name" className="fw-normal pb-1">Name</label>
                        <input type="text" onChange={handleName} className=" form-control" placeholder="Gallery Category Name" />
                        {errors.name ? <small className=" text-danger">{errors.name}</small> : ''}
                    </div>
                    <div className=" text-end">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

AddForm.propTypes = {
    galleryCategoryAdd: PropTypes.any, 
    from: PropTypes.any, 
    handleName: PropTypes.any, 
    errors: PropTypes.any
}

export default AddForm;
