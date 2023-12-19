
import { PropTypes } from 'prop-types';
const TrustBinAllSelectedArea = ({ selectAll, handleSelectAllChangeInTrustBin }) => {
    return (
        <div className="col-md-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"
                    checked={selectAll}
                    onChange={handleSelectAllChangeInTrustBin} />
                <label className="form-check-label text-capitalize fw-normal text-muted" htmlFor="flexCheckDefault">
                    select all
                </label>
            </div>
        </div>
    );
}

TrustBinAllSelectedArea.propTypes = {
    selectAll: PropTypes.any, 
    handleSelectAllChangeInTrustBin: PropTypes.any
}

export default TrustBinAllSelectedArea;
