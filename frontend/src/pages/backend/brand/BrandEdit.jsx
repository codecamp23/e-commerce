import { useEffect } from 'react';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.css';
import '../../../assets/backend/plugins/simplebar/css/simplebar.css';
import '../../../assets/backend/plugins/metismenu/css/metisMenu.min.css';
import '../../../assets/backend/css/bootstrap.min.css';
import '../../../assets/backend/css/bootstrap-extended.css';
import '../../../assets/backend/css/app.css';
import '../../../assets/backend/css/icons.css';
import '../../../assets/backend/css/dark-theme.css';
import '../../../assets/backend/css/semi-dark.css';
import '../../../assets/backend/css/header-colors.css';
import '../../../assets/backend/css/header-colors.css';
// js
import '../../../assets/backend/js/bootstrap.bundle.min.js';
import '../../../assets/backend/js/jquery.min.js'
import '../../../assets/backend/plugins/simplebar/js/simplebar.min.js';
import '../../../assets/backend/plugins/metismenu/js/metisMenu.min.js';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.min.js';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-world-mill-en.js';
import '../../../assets/backend/plugins/chartjs/js/chart.js';
import '../../../assets/backend/js/index.js';
import '../../../assets/backend/js/app.js';
import '../../../main.css';
import BrandContext from './../../../context/backend/BrandContext';
import { useParams } from 'react-router-dom';
const BrandEdit = () => {
    const { getBrand, brand } = BrandContext();
    const { id } = useParams();
    useEffect(() => {
        new PerfectScrollbar(".app-container")
        getBrand(id)
    }, [])
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="fw-semibold py-2">Brand Information</h5>
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="card">

                                    <div className="brand_edit rounded">
                                        <ul className="nav nav-pills mb-3 w-100" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link py-3 rounded-bottom-0 active" id="pills-english-tab" data-bs-toggle="pill" data-bs-target="#pills-english" type="button" role="tab" aria-controls="pills-english" aria-selected="true">English</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link py-3 rounded-bottom-0" id="pills-bangla-tab" data-bs-toggle="pill" data-bs-target="#pills-bangla" type="button" role="tab" aria-controls="pills-bangla" aria-selected="false">Bangla</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-english" role="tabpanel" aria-labelledby="pills-english-tab" tabIndex={0}>
                                                <div className="row px-4 pb-1 pt-1">
                                                    <div className="col-md-12">
                                                        <div className="row pb-3">
                                                            <div className="col-md-3">Brand Name</div>
                                                            <div className="col-md-9">
                                                                <input type="text" className='form-control' placeholder='Brand Name' defaultValue={brand.name} />
                                                            </div>
                                                        </div>
                                                        <div className="row pb-3">
                                                            <div className="col-md-3">Image</div>
                                                            <div className="col-md-9">
                                                                <div className="d-flex" data-bs-toggle="modal" data-bs-target="#imageUploader">
                                                                    <button type="button" className="bg-body-secondary border-0 py-2 px-3 rounded rounded-end-0">Browser</button>
                                                                    <button type="button" className="bg-light border-0 w-100 py-2 rounded rounded-start-0 text-start ps-3">{brand.image ? 1 : 0} Choose file</button>
                                                                </div>
                                                                <div className="row pt-2">
                                                                    <div className="col-md-3">
                                                                        <div className="card px-2 pt-2 position-relative">
                                                                            <img src={brand.image} style={{ width: "100%" }} alt="..." />
                                                                            <button type="button" className="btn btn-ms btn-light text-danger position-absolute rounded-circle end-0 top-0 px-0 ps-2 py-0 text-center" style={{ margin: "-.5rem -.5rem 0 0" }}>
                                                                                <i className="lni lni-close" style={{ fontSize: "12px" }}></i>
                                                                            </button>
                                                                            <div className="card-body px-2 pt-0 pb-1">
                                                                                <span style={{ fontSize: "13px" }}>{brand.name}</span>
                                                                                <small>{brand.size}</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <input type="hidden" />
                                                            </div>
                                                        </div>
                                                        <div className="row pb-3">
                                                            <div className="col-md-3">Meta Title</div>
                                                            <div className="col-md-9">
                                                                <input type="text" className='form-control' placeholder='Meta Title' defaultValue={brand.meta_title} />
                                                            </div>
                                                        </div>
                                                        <div className="row pb-3">
                                                            <div className="col-md-3">Meta Description</div>
                                                            <div className="col-md-9">
                                                                <textarea rows="9" className='form-control' defaultValue={brand.meta_description}></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="row pb-3 text-end">
                                                            <div className="col-md-12">
                                                                <button type="button" className="btn btn-info text-white">Update</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="pills-bangla" role="tabpanel" aria-labelledby="pills-bangla-tab" tabIndex={0}>bangla</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandEdit;
