import { useEffect } from "react";
import SizeContext from "../../../context/backend/SizeContext";
import SizePageHeader from "../../../components/backend/size/SizePageHeader";
import Table from "../../../components/backend/size/Table";
import SizeCardHeader from "../../../components/backend/size/SizeCardHeader";

const Size = () => {
    const { searchSize, sizesLength, loading, sizes, page, limit, totalPage, handlePageChange, sizeStatusChange, deleteData } = SizeContext();
    useEffect(() => {
        
    }, []);
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <SizePageHeader />
                        <div className="row pt-2">
                            <div className="col-md-12">
                                <div className="card rounded-1">
                                    <SizeCardHeader searchSize={searchSize} />
                                    <Table sizesLength={sizesLength} loading={loading} sizes={sizes} page={page} limit={limit} totalPage={totalPage} handlePageChange={handlePageChange} sizeStatusChange={sizeStatusChange} deleteData={deleteData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Size;
