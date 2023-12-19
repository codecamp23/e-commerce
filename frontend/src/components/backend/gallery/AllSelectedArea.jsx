import { PropTypes } from 'prop-types';
const AllSelectedArea = ({ selectAll, handleSelectAllChange }) => {
    return (
        <div className="col-md-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"
                    checked={selectAll}
                    onChange={handleSelectAllChange} />
                <label className="form-check-label text-capitalize fw-normal text-muted" htmlFor="flexCheckDefault">
                    select all
                </label>
            </div>
        </div>
    );
}

AllSelectedArea.propTypes = {
    selectAll: PropTypes.any,
    handleSelectAllChange: PropTypes.any,
}

export default AllSelectedArea;
