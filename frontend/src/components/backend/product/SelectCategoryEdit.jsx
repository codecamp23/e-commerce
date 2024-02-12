import { PropTypes } from 'prop-types';
const SelectCategoryEdit = ({ categories, category_id, product }) => {
    return (
        <div className="card px-3">
            <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-4 d-flex justify-content-between align-items-center'>
                <span className="fs-6 fw-normal">Select Category</span>
            </div>
            <div className="card-body px-4 pt-4">
                <div className="row pb-3">
                    <select ref={category_id} multiple className="form-select py-3 px-3" id="sel2" name="sellist2">
                        {categories.length > 0 && categories.map((category, index) => (<option key={index + 1} value={category.id} selected={product.category_id === category.id ? true : index + 1 === 1 ? product.category_id !== category.id ? false : true : false}>{category.name}</option>))}
                    </select>
                </div>
            </div>
        </div>
    );
}

SelectCategoryEdit.propTypes = {
    categories: PropTypes.any,
    category_id: PropTypes.any,
    product: PropTypes.any,
}

export default SelectCategoryEdit;
