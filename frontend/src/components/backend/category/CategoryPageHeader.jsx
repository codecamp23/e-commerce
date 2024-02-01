import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";

const CategoryPageHeader = () => {
    return (
        <div className="fw-semibold py-2 d-flex justify-content-between align-items-center ">
            <PageTitle pageTitle={'All Categories'} />
            <Link to="/admin/category-create" className="btn btn-info rounded-5 px-4 py-2 text-light ">Add New Category</Link>
        </div>
    );
}

export default CategoryPageHeader;
