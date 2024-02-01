import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PageTitle = ({pageTitle}) => {
    return (
        <h5 className="fw-semibold py-2">{pageTitle}</h5>
    );
}
PageTitle.propTypes = { 
    pageTitle: PropTypes.any,
}

export default PageTitle;
