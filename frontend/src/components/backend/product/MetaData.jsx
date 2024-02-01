

const MetaData = () => {
    return (
        <div className="card px-3 pt-2">
            <div className="card-body px-4">
                <div className="row pb-3">
                    <div className="col-md-3">Meta Title</div>
                    <div className="col-md-9">
                        <input type="text" className='form-control' placeholder='Meta Title' />
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-3">Meta Description</div>
                    <div className="col-md-9">
                        <textarea className="form-control" rows="6"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MetaData;
