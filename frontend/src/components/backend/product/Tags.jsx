import { PropTypes } from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';

const Tags = ({ setTags, tags }) => {
    if (tags.length > 0) {
        import('../../../assets/backend/css/tag-input.css');
    }

    
    
    const KeyCodes = {
        comma: 188,
        enter: 13
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];


    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
        console.log(tags);
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice(); 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag); 
        // re-render
        setTags(newTags);
    };

    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    };
    return (
        <div className="card px-3">
            <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-2 d-flex justify-content-between align-items-center'>
                <span className="fs-6 fw-normal">Tags</span>
            </div>
            <div className="card-body px-4 py-4">
                <ReactTags
                    tags={tags}
                    delimiters={delimiters}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    handleTagClick={handleTagClick}
                    inputFieldPosition="bottom"
                    classNames={{
                        tagInputField: 'form-control',
                    }}
                    placeholder='Tags...'
                />
            </div>
        </div>
    );
}

Tags.propTypes = {
    setTags: PropTypes.any,
    tags: PropTypes.any,
}

export default Tags;
