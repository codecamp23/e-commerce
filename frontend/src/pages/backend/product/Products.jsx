import ProductContext from "../../../context/backend/ProductContext";
import ProductCardHeader from "../../../components/backend/product/ProductCardHeader";
import ProductsPageHeader from "../../../components/backend/product/ProductsPageHeader";
import Table from "../../../components/backend/product/Table";
import { useEffect } from "react";

const Products = () => {
    const { getAllProducts, loading, products, page, limit, totalPage, handlePageChange, productSearch, searchHandle, refundableHandle, productStatus, dataDelete } = ProductContext();
    useEffect(() => {
        getAllProducts(page, productSearch);
    }, []);
    return (

        <div className="page-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ProductsPageHeader />

                        <div className="row pt-2 mt-3">
                            <div className="col-md-12">
                                <div className="card rounded-1">
                                    <ProductCardHeader cardHeader={'All Product'} searchHandle={searchHandle} />
                                    <Table products={products} loading={loading} page={page} limit={limit} totalPage={totalPage} handlePageChange={handlePageChange} refundableHandle={refundableHandle} productStatus={productStatus} dataDelete={dataDelete} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
