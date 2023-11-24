const AddForm = (props) => {
    return (
        <div className="col-md-4">
            <div className="card rounded-1">
                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4'>
                    <span className="fs-6 fw-normal text-capitalize">Add new Brand</span>
                </div>
                <form className="card-body px-4">
                    <div className="pb-3">
                        <label htmlFor="name" className="fw-normal pb-1">Name</label>
                        <input type="text" className=" form-control" placeholder="Brand Name" />
                    </div>
                    <div className="pb-3">
                        <div className="text-center">
                            <img src={props.demo} style={{ width: "100px" }} className="d-none" alt="" />
                        </div>
                        <label htmlFor="name" className="fw-normal pb-1">Image <small>({props.imageCount})</small></label>
                        <div className="d-flex" data-bs-toggle="modal" data-bs-target="#imageUploader">
                            <button type="button" className="bg-body-secondary border-0 py-2 px-3 rounded rounded-end-0">Browser</button>
                            <button type="button" className="bg-light border-0 w-100 py-2 rounded rounded-start-0 text-start ps-3">Choose file</button>
                        </div>
                        <input type="hidden" defaultValue={props.image} />
                        {props.image && <div className="text-center position-relative mt-3">
                            <img src={props.image} style={{ width: "150px" }} alt="..." />
                            <button type="button" className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 pe-0 pt-0 ps-1 pb-1" onClick={props.removeImage}>
                                <i class="lni lni-close fs-6"></i>
                            </button>
                        </div>}
                    </div>
                    <div className="pb-3">
                        <label htmlFor="meta_title" className="fw-normal pb-1 text-capitalize">Meta title</label>
                        <input type="text" className=" form-control" placeholder="Meta Title" />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="meta_title" className="fw-normal pb-1 text-capitalize">Meta Description</label>
                        <textarea rows={4} className="form-control"></textarea>
                    </div>
                    <div className=" text-end">
                        <button type="submit" className="btn btn-info text-white">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddForm;
