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
                            <div className="col-md-8">
                                <div className="card rounded-1">
                                    <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4 d-flex justify-content-between align-items-center'>
                                        <span className="fs-6 fw-normal text-capitalize">gallery category</span>
                                        <div>
                                            <input type="search" name='search' id='search' className="form-control" placeholder="Search gallery category ..." />
                                        </div>
                                    </div>
                                    <div className="card-body px-4">
                                        <div className="table-responsive">
                                            <table className="table table-sm table-hover">
                                                <thead>
                                                    <tr className="text-center">
                                                        <th style={{ fontSize: "12px", fontWeight: "500" }}>#</th>
                                                        <th style={{ fontSize: "12px", fontWeight: "500" }}>Gallery Category</th>
                                                        <th style={{ fontSize: "12px", fontWeight: "500" }}>Gallery Category slug</th>
                                                        <th style={{ fontSize: "12px", fontWeight: "500" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="fw-normal" style={{ fontSize: "13px" }}>
                                                    {loading === false ? (<tr>
                                                        <td colSpan="4" className="py-3">
                                                            <div className="text-center">
                                                                <div className="spinner-border" role="status">
                                                                    <span className="visually-hidden">Loading...</span>
                                                                </div>
                                                            </div>

                                                        </td>
                                                    </tr>) : (galleryCategories.map((galleryCategory, index) => (
                                                        <tr key={index} className="text-center">
                                                            <td className="text-muted py-3">{index + 1}</td>
                                                            <td className="text-muted py-3">{galleryCategory.name}</td>
                                                            <td className="text-muted py-3">{galleryCategory.slug}</td>
                                                            <td className="text-muted py-3">
                                                                <button type="button" onClick={() => edit(galleryCategory.id)} className="btn btn-sm btn-outline-primary p-0 ps-2 pb-1 rounded-circle" data-bs-toggle="modal" data-bs-target="#edit">
                                                                    <i className="lni lni-pencil-alt" style={{ fontSize: "13px" }} />
                                                                </button>
                                                                <button type="button" onClick={() => openDeleteModal(galleryCategory.id)} className='btn btn-sm btn-outline-danger p-0 ps-2 pb-1 rounded-circle ms-1' data-bs-toggle="modal" data-bs-target="#delete">
                                                                    <i className="lni lni-trash" style={{ fontSize: "13px" }}></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* <hr /> */}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card rounded-1">
                                    <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-3 px-4'>
                                        <span className="fs-6 fw-normal text-capitalize">Add new gallery category</span>
                                    </div>
                                    <form onSubmit={galleryCategoryAdd} ref={from} className="card-body px-4">
                                        <div className="pb-3">
                                            <label htmlFor="name" className="fw-normal pb-1">Name</label>
                                            <input type="text" onChange={handleName} className=" form-control" placeholder="Gallery Category Name" />
                                            {errors.name ? <small className=" text-danger">{errors.name}</small> : ''}
                                        </div>
                                        <div className=" text-end">
                                            <button type="submit" className="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="edit" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen-md-down">
                    <div className="modal-content">
                        <div className="modal-header fs-5">
                            <h5 className='modal-title '>Edit Gallery Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form ref={updateForm} onSubmit={update} className="modal-body px-5 py-5">
                            <div className="pb-3">
                                <input type="hidden" ref={updateGalleryCategoryId} defaultValue={galleryCategory.id} />
                                <label htmlFor="name" className="fw-normal pb-1">Name</label>
                                <input type="text" ref={galleryCategoryName} className=" form-control" placeholder="Gallery Category Name" defaultValue={galleryCategory.name} />
                                {errors.name ? <small className=" text-danger">{errors.name}</small> : ''}
                            </div>
                            <div className=" text-end">
                                <button type="button" onClick={() => cancel()} ref={closeUpdateModal} className="btn btn-danger me-1" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="modal" id="delete" tabIndex="-1">
                <div className="modal-dialog  modal-dialog-centered modal-sm modal-fullscreen-md-down">
                    <div className="modal-content">
                        <div className="modal-body px-5 py-4">
                            <div className="text-end">
                            </div>
                            <div className="text-center">
                                <span className="border border-2 border-warning fs-4 px-2 py-0 text-warning rounded-circle">!</span>
                                <h4 className="text-warning">Delete</h4>
                            </div>
                            <input type="hidden" ref={galleryCategoryId} defaultValue={GCId} />
                            <p className="text-center text-muted">Are you sure want ot delete this data?</p>
                            <div className=" text-center">
                                <button type="button" ref={deleteModalClose} data-bs-dismiss="modal" className="btn btn-sm btn-secondary me-2">Close</button>
                                <button type="button" onClick={Delete} className="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleryCategory;
