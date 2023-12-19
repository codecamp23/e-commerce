import { useEffect } from "react";
import GalleryCategoryContext from "../../context/backend/GalleryCategoryContext";
import '../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.css';
import '../../assets/backend/plugins/simplebar/css/simplebar.css';
import '../../assets/backend/plugins/metismenu/css/metisMenu.min.css';
import '../../assets/backend/css/bootstrap.min.css';
import '../../assets/backend/css/bootstrap-extended.css';
import '../../assets/backend/css/app.css';
import '../../assets/backend/css/icons.css';
import '../../assets/backend/css/dark-theme.css';
import '../../assets/backend/css/semi-dark.css';
import '../../assets/backend/css/header-colors.css';
import '../../assets/backend/css/header-colors.css';
// js
import '../../assets/backend/js/bootstrap.bundle.min.js';
import '../../assets/backend/js/jquery.min.js'
import '../../assets/backend/plugins/simplebar/js/simplebar.min.js';
import '../../assets/backend/plugins/metismenu/js/metisMenu.min.js';
import '../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.min.js';
import '../../assets/backend/plugins/vectormap/jquery-jvectormap-world-mill-en.js';
import '../../assets/backend/plugins/chartjs/js/chart.js';
import '../../assets/backend/js/index.js';
import '../../assets/backend/js/app.js';
import Table from "../../components/backend/gallery_category/Table.jsx";
import AddForm from "../../components/backend/gallery_category/AddForm.jsx";
import EditModal from "../../components/backend/gallery_category/EditModal.jsx";
import DeleteModal from "../../components/backend/gallery_category/DeleteModal.jsx";


const GalleryCategory = () => {
    const { setName, galleryCategoryAdd, from, errors, getGalleryCategory, galleryCategories, loading, edit, galleryCategory, updateForm, update, galleryCategoryId, galleryCategoryName, closeUpdateModal, openDeleteModal, GCId, Delete, deleteModalClose, updateGalleryCategoryId } = GalleryCategoryContext();

    useEffect(() => {
        getGalleryCategory()
    }, [])

    const handleName = (e) => {
        setName(e.target.value);
    }

    const cancel = () => {
        updateForm.current.reset();
    }

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="fw-semibold py-2">All Gallery Category</h5>
                        <div className="row">
                            <Table loading={loading} galleryCategories={galleryCategories} edit={edit} openDeleteModal={openDeleteModal} />
                            <AddForm galleryCategoryAdd={galleryCategoryAdd} from={from} handleName={handleName} errors={errors} />
                        </div>
                    </div>
                </div>
            </div>


            <EditModal updateForm={updateForm} update={update} updateGalleryCategoryId={updateGalleryCategoryId} galleryCategory={galleryCategory} galleryCategoryName={galleryCategoryName} errors={errors} cancel={cancel} closeUpdateModal={closeUpdateModal} /> 
            <DeleteModal galleryCategoryId={galleryCategoryId} GCId={GCId} deleteModalClose={deleteModalClose} Delete={Delete} />
        </div>
    );
}

export default GalleryCategory;
