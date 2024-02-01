import { useEffect } from "react";
import PageTitle from "../../../components/backend/PageTitle";
import AddForm from "../../../components/backend/color/AddForm";
import ColorContext from "../../../context/backend/ColorContext";
import Table from "../../../components/backend/color/Table";

const Color = () => {
    const { getAllColors, page, search, limit, totalPage, loading, colors, name, color_code, Add, addForm, errors, handlePageChange, colorSearchHandle, Delete } = ColorContext();
    useEffect(() => {
        getAllColors(page, search);
    }, [])
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <PageTitle pageTitle={'All Colors'} />
                        <div className="row">
                            <Table loading={loading} colors={colors} totalPage={totalPage} page={page} limit={limit} handlePageChange={handlePageChange} colorSearchHandle={colorSearchHandle} Delete={Delete} />
                            <AddForm name={name} color_code={color_code} Add={Add} addForm={addForm} errors={errors} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Color;
