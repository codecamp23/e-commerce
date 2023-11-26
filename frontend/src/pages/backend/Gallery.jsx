import { useEffect } from 'react';
import GalleryContext from '../../context/backend/GalleryContext';
import { Link } from 'react-router-dom';
import Pagination from '../../pagination/backend/Pagination';
// assets
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

const Gallery = () => {
    const { getGalleryCategories, getAtFirstGalleries, getGalleries, galleryCategories, add, name, gallery_category_id, image, closeAddForm, addFrom, galleries, imageURL, getDetailInfo, gallery, galleryCategory, handleCopyClick, linkRef, DetailImageDownload, imageDownload, deleteGallery, errors, nameErrorsHandle, imageErrorsHandle, setNameErrorsHandle, setImageErrorsHandle, page, totalPage, limit, handlePageChange, getGalleryWithCategory, galleryCategoryId, search, setSearch, onChangeSeach, selectedGalleries, handleCheckboxChange, handleDeleteSelected, selectAll, handleSelectAllChange } = GalleryContext();

    useEffect(() => {
        getGalleryCategories();
        getAtFirstGalleries(page, galleryCategoryId, search);
        getGalleries();
    }, []);
    const closeAddModal = () => {
        closeAddForm.current.click();
        addFrom.current.reset();
    }

    const getGalleryName = (name) => {
        const maxLength = 13;
        if (name.length <= maxLength) {
            return name;
        } else {
            const truncatedName = name.slice(0, maxLength) + "... ";
            return truncatedName;
        }
    }

    // function handlePageChange(value) {
    //     if (value === "&laquo;" || value === "... ") {
    //         setPage(1);
    //     } else if (value === "&lsaquo;") {
    //         if (page !== 1) {
    //             setPage(page - 1);
    //         }
    //     } else if (value === "&rsaquo;") {
    //         if (page !== totalPage) {
    //             setPage(page + 1);
    //         }
    //     } else if (value === "&raquo;" || value === " ...") {
    //         setPage(totalPage);
    //     } else {
    //         setPage(value);
    //     }
    // }

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between py-2 align-items-center">
                            <h5 className="fw-semibold text-capitalize">All uploaded files</h5>
                            <button type="button" className="btn btn-info text-uppercase fw-normal text-light"
                                style={{ fontSize: "14px" }} data-bs-toggle="modal"
                                data-bs-target="#add">Uploaded New file</button>
                        </div>
                        <div className="card">
                            <div className="px-4 py-2 border border-top-0 border-end-0 border-start-0 border-bottom-1 border-light">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <div className="d-md-block d-none">All files</div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="d-flex justify-content-md-end justify-content-between align-items-center py-md-0 py-2 ps-md-0 ps-1">
                                                    <div className="d-md-none d-block">
                                                        <div>All files</div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <button type="button" onClick={() => handleDeleteSelected()} className="btn btn-danger me-2 text-capitalize">delete all</button>
                                                        <Link to="/admin/gallery-trust-bin" className="btn btn-light me-2">
                                                            Trsut Bin
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 pb-md-0 pb-2">
                                                <select name="" id="" onChange={getGalleryWithCategory} className=" form-control text-muted">
                                                    <option value="">All</option>
                                                    {galleryCategories.map((gallerycategory, index) => (
                                                        <option value={gallerycategory.id} key={index}>{gallerycategory.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="d-flex justify-content-end">
                                                    <input type="text" onChange={(e) => setSearch(e.target.value)} className=" form-control me-1" placeholder="Search Files" />
                                                    <button type="button" onClick={onChangeSeach} className="btn btn-info text-light">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" card-body px-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault"
                                                checked={selectAll}
                                                onChange={handleSelectAllChange} />
                                            <label className="form-check-label text-capitalize fw-normal text-muted" htmlFor="flexCheckDefault">
                                                select all
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 pt-3 pb-2">
                                        <div className="row">
                                            {galleries.map((gallery) => (
                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={gallery.id}>
                                                    <div className="card card-body position-relative">
                                                        <img src={`${imageURL}/upload/images/gallery/${gallery.image}`} style={{ widht: "100%", height: "9em" }} alt="..." />
                                                        <div className="form-check position-absolute left-0">
                                                            <input className="form-check-input" type="checkbox" checked={selectAll || selectedGalleries.includes(gallery.id)} onChange={() => handleCheckboxChange(gallery.id)} id="flexCheckDefault" />
                                                        </div>
                                                        <div className="position-absolute end-0 pe-3">
                                                            <div className='btn-group'>
                                                                <i className="lni lni-radio-button bg-light px-1 py-1 rounded" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <button className="dropdown-item" onClick={() => getDetailInfo(gallery.id)} type="button" data-bs-toggle="offcanvas" data-bs-target="#detailInfo" aria-controls="offcanvasRight">
                                                                            <i className="lni lni-question-circle me-1"></i>Details Info
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="dropdown-item" onClick={() => imageDownload(gallery.image)} type="button">
                                                                            <i className="lni lni-download me-1"></i>
                                                                            Download
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button onClick={() => handleCopyClick()} className="dropdown-item" type="button">
                                                                            <input type="hidden" value={`${imageURL}/upload/images/gallery/${gallery.image}`} ref={linkRef} />
                                                                            <i className="lni lni-clipboard me-1"></i>
                                                                            Copy Link
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button onClick={() => deleteGallery(gallery.id)} className="dropdown-item" type="button">
                                                                            <i className="lni lni-trash me-1"></i>
                                                                            Delete
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className='mt-2'>{getGalleryName(gallery.name)}{gallery.extention}</div>
                                                            <small>size: {gallery.size}kb</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} />
                                    {/* <div className="col-md-12 gallery_pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link px-3 py-2" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">«</span>
                                                    </a>
                                                </li>
                                                {array.map(value => {
                                                    if (value === page) {
                                                        return (
                                                            <li key={value} className="page-item ms-2"><a className="page-link active px-3 py-2" onClick={() => handlePageChange(value)}>{value}</a></li>
                                                        )
                                                    } else {
                                                        return (
                                                            <li key={value} className="page-item ms-2"><a className="page-link px-3 py-2" onClick={() => handlePageChange(value)}>{value}</a></li>
                                                        )
                                                    }
                                                })}
                                                <li className="page-item ms-2">
                                                    <a className="page-link px-3 py-2" href="#" aria-label="Next">
                                                        <span aria-hidden="true">»</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>

                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="add" tabIndex={-1}>
                <div className="modal-dialog modal-fullscreen-md-down">
                    <div className="modal-content">
                        <div className="modal-header fs-5">
                            <h5 className='modal-title text-capitalize'>add new file</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={add} ref={addFrom} className="modal-body px-5 py-5">
                            <div className="pb-3">
                                <label htmlFor="name" className="fw-normal pb-1 text-capitalize">file name</label>
                                <input type="text" ref={name} onChange={() => setNameErrorsHandle(false)} className=" form-control" placeholder="File's Name" />
                                {errors.name && nameErrorsHandle === true ? <small className="text-danger">{errors.name}</small> : ''}
                            </div>
                            <div className="pb-3">
                                <label htmlFor="name" className="fw-normal pb-1 text-capitalize">file Category</label>
                                <select name="" id="" ref={gallery_category_id} className=" form-control">
                                    {galleryCategories.map((galleryCategory) => (
                                        <option value={galleryCategory.id} key={galleryCategory.id}>{galleryCategory.name}</option>
                                    ))}
                                </select>
                                {errors.gallery_category_id ? <small className="text-danger">{errors.gallery_category_id}</small> : ''}
                            </div>
                            <div className="pb-3">
                                <label htmlFor="name" className="fw-normal pb-1 text-capitalize">file</label>
                                <input type="file" ref={image} onChange={() => setImageErrorsHandle(false)} className=" form-control text-muted" />
                                {errors.image && imageErrorsHandle === true ? <small className="text-danger">{errors.image}</small> : ''}
                            </div>
                            <div className=" text-end">
                                <button type="button" onClick={closeAddModal} ref={closeAddForm} className='btn btn-danger me-2' data-bs-dismiss="modal" aria-label="Close">Close</button>
                                <button type="submit" className="btn btn-primary text-capitalize">add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <div className="offcanvas offcanvas-end" tabIndex={-1} id="detailInfo" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border border-top-0 border-end-0 border-start-0 border-bottom-1 border-light">
                    <h5 className="offcanvas-title ps-2" id="offcanvasRightLabel">File Info</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body ps-4">
                    <div>
                        <label htmlFor="filename fw-normal" style={{ fontSize: '.9em' }}>File Name</label>
                        <input type="text" value={gallery.name} className=' form-control mt-1' disabled />
                    </div>
                    <div className='pt-3'>
                        <label htmlFor="filename fw-normal" style={{ fontSize: '.9em' }}>Gallery Category</label>
                        <input type="text" value={galleryCategory.name} className=' form-control mt-1' disabled />
                    </div>
                    <div className='pt-3'>
                        <label htmlFor="filename fw-normal" style={{ fontSize: '.9em' }}>File Type</label>
                        <input type="text" value={gallery.file_type} className=' form-control mt-1' disabled />
                    </div>
                    <div className='pt-3'>
                        <label htmlFor="filename fw-normal" style={{ fontSize: '.9em' }}>File Size</label>
                        <input type="text" value={`${gallery.size}kb`} className=' form-control mt-1' disabled />
                    </div>
                    <div className='pt-3 text-center'>
                        <button type="button" onClick={() => DetailImageDownload(gallery.image)} className="btn btn-secondary px-5 py-2">Download</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Gallery;
