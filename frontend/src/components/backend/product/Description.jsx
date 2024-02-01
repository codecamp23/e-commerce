import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import '../../../assets/backend/summernote/summernote-lite.min.css';
import '../../../assets/backend/js/jquery.min.js';
import '../../../assets/backend/summernote/summernote-lite.js'; 

const Description = ({ description }) => {

    useEffect(() => {
        $(description.current).summernote({
            placeholder: 'Write your blog here.............',
            height: 250
        });
    }, []);

    return (
        <div className="card px-3">
            <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-2 d-flex justify-content-between align-items-center'>
                <span className="fs-6 fw-normal">Description <small className='text-danger'>*</small></span>
            </div>
            <div className="card-body px-4 py-4">   
                <textarea ref={description} className="form-control" rows="6"></textarea>
            </div>
        </div>
    );
}

Description.propTypes = {
    description: PropTypes.any,
}

export default Description;
