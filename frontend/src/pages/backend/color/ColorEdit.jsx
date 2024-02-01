import { useEffect } from "react";
import PageTitle from "../../../components/backend/PageTitle";
import ColorContext from "../../../context/backend/ColorContext";
import { useParams } from "react-router-dom";
import EditForm from "../../../components/backend/color/EditForm";

const ColorEdit = () => {
    const { getColor, color, colorId, name, color_code, Edit, editForm, errors } = ColorContext();
    const {id} = useParams();
    useEffect(() => {
        getColor(id)
    }, [])
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <PageTitle pageTitle={'Color Information'} />
                        <div className="row justify-content-center pt-3">
                            <EditForm color={color} colorId={colorId} name={name} color_code={color_code} Edit={Edit} editForm={editForm} errors={errors} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorEdit;
