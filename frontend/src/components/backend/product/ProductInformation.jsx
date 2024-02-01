import { PropTypes } from 'prop-types';
import Description from './Description';
import MetaData from './MetaData';

const ProductInformation = ({ /* that's for gallery start */ imageCount, gallery, Image, ImageName, ImageSize, ImageExtention, removeImage, /* that's for gallery end */
        /* product information start */ brands, name, brand_id, unit, price, purchase_qty, weight, barcode, refundableYes, refundableNo, description /* product information end */
    }) => {

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
        <div className="col-lg-7">
            <div className="card">
                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-4 d-flex justify-content-between align-items-center'>
                    <span className="fs-6 fw-normal">Product Information</span>
                </div>
                <div className="px-4 py-3">
                    <div className="card-body">
                        <div className="row pb-3">
                            <div className="col-md-3">Product Name <small className='text-danger'>*</small></div>
                            <div className="col-md-9">
                                <input type="text" ref={name} className='form-control' placeholder='Name' />
                                {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Brand</div>
                            <div className="col-md-9">
                                <select ref={brand_id} className="form-control">
                                    {brands.length > 0 && brands.map((brand) => (<option key={brand.id} defaultValue={brand.id}>{brand.name}</option>))}
                                </select>
                                {/* {errors.brand_id && <small className='text-danger ps-2'>{errors.brand_id}</small>} */}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Unit <small className='text-danger'>*</small></div>
                            <div className="col-md-9">
                                <input type="text" ref={unit} className='form-control' placeholder='Product Uints' />
                                {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Price <small className='text-danger'>*</small></div>
                            <div className="col-md-9">
                                <input type="text" ref={price} className='form-control' placeholder='Price' />
                                {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Purchase Qty <small className='text-danger'>*</small></div>
                            <div className="col-md-9">
                                <input type="text" ref={purchase_qty} className='form-control' placeholder='Purchase Qty' defaultValue={1} />
                                {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Weight (<small>kg/gm</small>)</div>
                            <div className="col-md-9">
                                <input type="text" ref={weight} className='form-control' placeholder='Weight' defaultValue={`1.0`} />
                                {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Barcode</div>
                            <div className="col-md-9">
                                <input type="text" ref={barcode} className='form-control' placeholder='Barcode' />
                                {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Image <small className="text-danger ">*</small></div>
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
                            <div className="col-md-3">Refundable</div>
                            <div className="col-md-9 d-flex ">
                                <div className="form-check me-3">
                                    <input className="form-check-input" ref={refundableYes} type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultValue={'yes'} defaultChecked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" ref={refundableNo} type="radio" name="flexRadioDefault" defaultValue={'no'} id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        No
                                    </label>
                                </div>

                                {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Description description={description} />

            <MetaData />

        </div>
    );
}


ProductInformation.propTypes = {
    /* that's for gallery start */
    imageCount: PropTypes.any,
    gallery: PropTypes.any,
    Image: PropTypes.any,
    ImageName: PropTypes.any,
    ImageSize: PropTypes.any,
    ImageExtention: PropTypes.any,
    removeImage: PropTypes.any,
    /* that's for gallery end */
    /* product information start */
    brands: PropTypes.any,
    name: PropTypes.any,
    unit: PropTypes.any,
    brand_id: PropTypes.any,
    price: PropTypes.any,
    purchase_qty: PropTypes.any,
    weight: PropTypes.any,
    barcode: PropTypes.any,
    refundableYes: PropTypes.any,
    refundableNo: PropTypes.any,
    description: PropTypes.any,
    /* product information end */
}

export default ProductInformation;
