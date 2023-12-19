import { PropTypes } from 'prop-types';

const GalleryImageDetailsInfo = ({ gallery, galleryCategory, DetailImageDownload }) => {
    return (
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
    );
}


GalleryImageDetailsInfo.propTypes = {
    gallery: PropTypes.any, 
    galleryCategory: PropTypes.any, 
    DetailImageDownload: PropTypes.any
}

export default GalleryImageDetailsInfo;
