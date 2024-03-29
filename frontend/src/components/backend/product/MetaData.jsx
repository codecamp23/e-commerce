 import { PropTypes } from 'prop-types';

const MetaData = ({ meta_title, meta_description }) => {
    return (
        <div className="card px-3 pt-2">
            <div className="card-body px-4">
                <div className="row pb-3">
                    <div className="col-md-3">Meta Title</div>
                    <div className="col-md-9">
                        <input type="text" className='form-control' ref={meta_title} placeholder='Meta Title' />
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-3">Meta Description</div>
                    <div className="col-md-9">
                        <textarea ref={meta_description} className="form-control" rows="6"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

MetaData.propTypes = {
    product: PropTypes.any,
    meta_title: PropTypes.any,
    meta_description: PropTypes.any,
}

export default MetaData;
