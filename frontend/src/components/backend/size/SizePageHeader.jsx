import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";

const SizePageHeader = () => {
    return (
        <div className="fw-semibold py-2 d-flex justify-content-between align-items-center ">
            <PageTitle pageTitle={'All Size Chart'} />
            <Link to="/admin/size-create" className="btn btn-info rounded-5 px-4 py-2 text-light ">Add New Size Chart</Link>
        </div>
    );
}

export default SizePageHeader;
