import { useEffect } from "react";
import CategoryCardHeader from "../../../components/backend/category/CategoryCardHeader";
import CategoryPageHeader from "../../../components/backend/category/CategoryPageHeader";
import Table from "../../../components/backend/category/Table";
import CategoryContext from './../../../context/backend/CategoryContext';

const Category = () => {
    const { getAtFirstCategories, loading, categoriesLength, categories, page, limit, totalPage, handlePageChange, categoryStatusChange, deleteData, searchCategory, categorySearch } = CategoryContext();
    useEffect(() => {
        getAtFirstCategories(page, categorySearch);
    }, []);
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <CategoryPageHeader />
                        <div className="row pt-2">
                            <div className="col-md-12">
                                <div className="card rounded-1">
                                    <CategoryCardHeader searchCategory={searchCategory} />
                                    <Table categoriesLength={categoriesLength} loading={loading} categories={categories} page={page} limit={limit} totalPage={totalPage} handlePageChange={handlePageChange} categoryStatusChange={categoryStatusChange} deleteData={deleteData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
