import { useEffect } from 'react';
import GalleryContext from '../../context/backend/GalleryContext';
import Pagination from '../../pagination/backend/Pagination';
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
import GalleryImageDetailsInfo from '../../components/backend/gallery/GalleryImageDetailsInfo.jsx';
import GalleryTrustBinTable from '../../components/backend/gallery/GalleryTrustBinTable.jsx';
import TrustBinAllSelectedArea from '../../components/backend/gallery/TrustBinAllSelectedArea.jsx';
import GalleryTrustBinCardHeader from '../../components/backend/gallery/GalleryTrustBinCardHeader.jsx';

const GalleryTrustBin = () => {
    const { getTrustBinGalleries, trustBinGalleries, imageURL, search, gallery, galleryCategory, DetailImageDownload, fileImage, deletePermanently, getTrustBinDetailInfo, trustBinTotalPage, page, limit, handleTrustBinPageChange, selectAll, selectedGalleries, handleCheckboxChangeTrustBin, handleSelectAllChangeInTrustBin, handleRestoreSelected, handlePermanentlyDeleteSelected, onChangeSeachTrustBin, setSearch } = GalleryContext();

    useEffect(() => {
        getTrustBinGalleries(page, search);
    }, []);


    const getGalleryName = (name) => {
        const maxLength = 13;
        if (name.length <= maxLength) {
            return name;
        } else {
            const truncatedName = name.slice(0, maxLength) + "... ";
            return truncatedName;
        }
    }

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between py-2 align-items-center">
                            <h5 className="fw-semibold text-capitalize">All trust bin files</h5>
                        </div>
                        <div className="card">
                            <GalleryTrustBinCardHeader handleRestoreSelected={handleRestoreSelected} handlePermanentlyDeleteSelected={handlePermanentlyDeleteSelected} setSearch={setSearch} onChangeSeachTrustBin={onChangeSeachTrustBin} />
                            <div className=" card-body px-4">
                                <div className="row">
                                    <TrustBinAllSelectedArea selectAll={selectAll} handleSelectAllChangeInTrustBin={handleSelectAllChangeInTrustBin} />
                                    <div className="col-md-12 pt-3 pb-2">
                                        <div className="row">
                                            <GalleryTrustBinTable trustBinGalleries={trustBinGalleries} imageURL={imageURL} selectAll={selectAll} selectedGalleries={selectedGalleries} handleCheckboxChangeTrustBin={handleCheckboxChangeTrustBin} getTrustBinDetailInfo={getTrustBinDetailInfo} fileImage={fileImage} deletePermanently={deletePermanently} getGalleryName={getGalleryName} />
                                        </div>
                                    </div>
                                    {trustBinGalleries.length > 0 && <Pagination totalPage={trustBinTotalPage} page={page} limit={limit} siblings={1} onPageChange={handleTrustBinPageChange} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <GalleryImageDetailsInfo gallery={gallery} galleryCategory={galleryCategory} DetailImageDownload={DetailImageDownload} />

        </div>
    );
}

export default GalleryTrustBin;
