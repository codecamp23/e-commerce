import { PropTypes } from 'prop-types';
import DescriptionEdit from './DescriptionEdit';
import MetaDataEdit from './MetaDataEdit';

const ProductInformationEdit = ({ /* that's for gallery start */ imageCount, gallery, Image, ImageName, ImageSize, ImageExtention, removeImage, /* that's for gallery end */
        /* product information start */ brands, name, brand_id, unit, price, purchase_qty, weight, barcode, refundableYes, refundableNo, description, meta_title, meta_description, errors, /* product information end */
    /* product information edit start */ product, editImageCount /* product information edit end */
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
                                <input type="text" ref={name} className='form-control' placeholder='Name' defaultValue={product.name !== null ? product.name : ''} />
                                {errors.name && <small className='text-danger ps-2'>{errors.name}</small>}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Brand</div>
                            <div className="col-md-9">
                                <select ref={brand_id} className="form-control">
                                    {brands.length > 0 && brands.map((brand) => (<option key={brand.id} selected={product.brand_id === brand.id && true} value={brand.id}>{brand.name}</option>))}
                                </select>
                                {errors.brand_id && <small className='text-danger ps-2'>{errors.brand_id}</small>}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Unit <small className='text-danger'>*</small></div>
                            <div className="col-md-9">
                                <input type="text" ref={unit} className='form-control' placeholder='Product Uints' defaultValue={product.unit !== null ? product.unit : ''} />
                                {errors.unit && <small className='text-danger ps-2'>{errors.unit}</small>}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Price <small className='text-danger'>*</small></div>
                            <div className="col-md-9">
                                <input type="text" ref={price} className='form-control' placeholder='Price' defaultValue={product.price !== null ? product.price : ''} />
                                {errors.price && <small className='text-danger ps-2'>{errors.price}</small>}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Purchase Qty <small className='text-danger'>*</small></div>
                            <div className="col-md-9">
                                <input type="text" ref={purchase_qty} className='form-control' placeholder='Purchase Qty' defaultValue={product.purchase_qty !== null ? product.purchase_qty : 1} />
                                {errors.purchase_qty && <small className='text-danger ps-2'>{errors.purchase_qty}</small>}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Weight (<small>kg/gm</small>)</div>
                            <div className="col-md-9">
                                <input type="text" ref={weight} className='form-control' placeholder='Weight' defaultValue={product.weight !== null ? product.weight : 1.0} />
                                {errors.weight && <small className='text-danger ps-2'>{errors.weight}</small>}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Barcode</div>
                            <div className="col-md-9">
                                <input type="text" ref={barcode} className='form-control' placeholder='Barcode' defaultValue={product.barcode !== null ? product.barcode : ''} />
                                {errors.barcode && <small className='text-danger ps-2'>{errors.barcode}</small>}
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Image <small className="text-danger ">*</small></div>
                            <div className="col-md-9">
                                <div className="d-flex" data-bs-toggle="modal" data-bs-target="#imageUploader">
                                    <button type="button" className="bg-body-secondary border-0 py-2 px-3 rounded rounded-end-0">Browser</button>
                                    <button type="button" className="bg-light border-0 w-100 py-2 rounded rounded-start-0 text-start ps-3">Choose file {imageCount > 0 ? imageCount : editImageCount > 0 ? editImageCount : ''}</button>
                                </div>
                                {errors.image && <small className="text-danger">{errors.image}</small>}
                                {imageCount > 0 && gallery.image !== '' ? <div className="row pt-3">
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
                                </div> : editImageCount > 0 && product.image !== null && <div className="row pt-3">
                                    <div className="col-lg-3 col-md-5 col-sm-4 col-6">
                                        <div className="card px-2 pt-2 position-relative">
                                            <div className=" text-center">
                                                <img src={product.image} style={{ width: "100%" }} alt="..." />
                                            </div>
                                            <button type="button" className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 pe-0 pt-0 ps-1 pb-1 rounded-circle" style={{ margin: "-.5rem -.5rem 0 0" }} onClick={() => removeImage()}>
                                                <i className="lni lni-close fs-6"></i>
                                            </button>
                                            <div className="card-body py-1 px-1">
                                                <div>{getGalleryName(product.image_name)}{product.image_extention}</div>
                                                <small>{product.image_size}kb</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                <input type="hidden" ref={Image} defaultValue={imageCount > 0 ? gallery.image : editImageCount > 0 ? product.image : ''} />
                                <input type="hidden" ref={ImageName} defaultValue={imageCount > 0 ? gallery.image_name : editImageCount > 0 ? product.image_name : ''} />
                                <input type="hidden" ref={ImageSize} defaultValue={imageCount > 0 ? gallery.image_size : editImageCount > 0 ? product.image_size : ''} />
                                <input type="hidden" ref={ImageExtention} defaultValue={imageCount > 0 ? gallery.image_extention : editImageCount > 0 ? product.image_extention : ''} />
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-3">Refundable</div>
                            <div className="col-md-9 d-flex ">
                                <div className="form-check me-3">
                                    <input className="form-check-input" ref={refundableYes} type="radio" name="flexRadioDefault1" id="flexRadioDefault1" defaultValue={'yes'} defaultChecked={product.refundable !== 'no' && true} />
                                    <label className="form-check-label1" htmlFor="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" ref={refundableNo} type="radio" name="flexRadioDefault2" defaultValue={'no'} id="flexRadioDefault2" defaultChecked={product.refundable === 'no' && true} />
                                    <label className="form-check-label2" htmlFor="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                                {errors.refundable && <small className='text-danger ps-2'>{errors.refundable}</small>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DescriptionEdit description={description} product={product} errors={errors} />

            <MetaDataEdit product={product} meta_title={meta_title} meta_description={meta_description} />

        </div>
    );
}


ProductInformationEdit.propTypes = {
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
    product: PropTypes.any,
    editImageCount: PropTypes.any,
    meta_title: PropTypes.any,
    meta_description: PropTypes.any,
    errors: PropTypes.any,
    /* product information end */
}

export default ProductInformationEdit;
