import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";

const ProductsPageHeader = () => {
    return (
        <>
            <div className="pt-4 px-4 fw-semibold d-flex justify-content-between align-items-center ">
                <PageTitle pageTitle={'All Products'} />
                <Link to="/admin/product-create" className="btn btn-info rounded-5 px-4 py-2 text-light">Add New Product</Link>
            </div>
        </>
    );
}

export default ProductsPageHeader;
