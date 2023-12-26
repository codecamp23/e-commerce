import { PropTypes } from 'prop-types';

const CreateForm = ({ imageCount, gallery, Image, ImageName, ImageSize, ImageExtention, removeImage, brands, Name, BrandId, MetaTitle, MetaDes, AddData }) => {
    const getGalleryName = (name) => {
        const maxLength = 3;
        if (name.length <= maxLength) {
            return name;
        } else {
            const truncatedName = name.slice(0, maxLength) + "... ";
            return truncatedName;
        }
    }
    return (
        <form onSubmit={AddData} className="card-body">
            <div className="row pb-3 pt-2">
                <div className="col-md-3">Name</div>
                <div className="col-md-9">
                    <input type="text" ref={Name} className='form-control' placeholder='Name' />
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-3">Brand</div>
                <div className="col-md-9">
                    <select key={BrandId} className="form-control">
                        {brands.length > 0 && brands.map((brand, index) => (<option key={index + 1} value={brand.id}>{brand.name}</option>))}
                    </select>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-3">Cover Image</div>
                <div className="col-md-9">
                    <div className="d-flex" data-bs-toggle="modal" data-bs-target="#imageUploader">
                        <button type="button" className="bg-body-secondary border-0 py-2 px-3 rounded rounded-end-0">Browser</button>
                        <button type="button" className="bg-light border-0 w-100 py-2 rounded rounded-start-0 text-start ps-3">Choose file {imageCount > 0 ? imageCount : ''}</button>
                    </div>
                    {imageCount > 0 && gallery.image !== '' && <div className="row pt-3">
                        <div className="col-lg-3 col-md-5 col-sm-4 col-6">
                            <div className="card px-2 pt-2 position-relative">
                                <div className=" text-center">
                                    <img src={gallery.image} style={{ width: "100%" }} alt="..." />
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 pe-0 pt-0 ps-1 pb-1 rounded-circle" style={{ margin: "-.5rem -.5rem 0 0" }} onClick={() => removeImage()}>
                                    <i className="lni lni-close fs-6"></i>
                                </button>
                                <div className="card-body py-1 px-1">
                                    <div>{getGalleryName(gallery.image_name)}{gallery.image_extention}</div>
                                    <small>{gallery.image_size}kb</small>
                                </div>
                            </div>
                        </div>
                    </div>}
                    <input type="hidden" ref={Image} defaultValue={imageCount > 0 ? gallery.image : ''} />
                    <input type="hidden" ref={ImageName} defaultValue={imageCount > 0 ? gallery.image_name : ''} />
                    <input type="hidden" ref={ImageSize} defaultValue={imageCount > 0 ? gallery.image_size : ''} />
                    <input type="hidden" ref={ImageExtention} defaultValue={imageCount > 0 ? gallery.image_extention : ''} />
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-3">Meta Title</div>
                <div className="col-md-9">
                    <input type="text" ref={MetaTitle} className='form-control' placeholder='Meta Title' />
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-3">Meta Description</div>
                <div className="col-md-9">
                    <textarea ref={MetaDes} className="form-control" rows="6"></textarea>
                </div>
            </div>
            <div className="text-end pt-1 pb-2">
                <button type="submit" className="btn btn-info px-4 py-2 text-light">Save</button>
            </div>
        </form>
    );
}

CreateForm.propTypes = {
    imageCount: PropTypes.any, 
    gallery: PropTypes.any, 
    Image: PropTypes.any, 
    ImageName: PropTypes.any, 
    ImageSize: PropTypes.any, 
    ImageExtention: PropTypes.any,
    removeImage: PropTypes.any,
    brands: PropTypes.any,
    Name: PropTypes.any, 
    BrandId: PropTypes.any, 
    MetaTitle: PropTypes.any, 
    MetaDes: PropTypes.any,
    AddData: PropTypes.any,
}

export default CreateForm;
