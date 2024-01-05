import { Link } from "react-router-dom";

const CategoryPageTitle = () => {
    return (
        <div className="fw-semibold py-2 d-flex justify-content-between align-items-center ">
            <h5>All Categories</h5>
            <Link to="/admin/category-create" className="btn btn-info rounded-5 px-4 py-2 text-light ">Add New Category</Link>
        </div>
    );
}

export default CategoryPageTitle;
