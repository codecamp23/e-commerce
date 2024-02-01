import { PropTypes } from 'prop-types';

const Offer = ({ offerBackground, offerHandle, offerStatus, remark, discount, discount_price }) => {
    return (
        <div className="card" style={offerBackground}>
            <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-4 d-flex justify-content-between align-items-center'>
                <span className="fs-6 fw-normal">Offer Flash Deal</span>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => offerHandle(offerStatus)} defaultChecked={offerHandle} />
                </div>
            </div>
            <div className="card-body pt-4">
                <div className="row pb-3">
                    <div className="col-md-5">
                        <label htmlFor="Measurement Points">Offer</label>
                    </div>
                    <div className="col-md-7">
                        <select ref={remark} className={`form-select ${offerStatus === false && 'text-muted'}`} disabled={offerStatus === false ? true : false}>
                            <option defaultValue="" className="">Choose Flash Title</option>
                            <option defaultValue="">2</option>
                            <option defaultValue="">2</option>
                            <option defaultValue="">2</option>
                            <option defaultValue="">2</option>
                        </select>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-5">Discount</div>
                    <div className="col-md-7">
                        <input type="text" ref={discount} className='form-control' placeholder='Discount Percent'  disabled={offerStatus === false ? true : false} />
                        {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-5">Discount Price</div>
                    <div className="col-md-7">
                        <input type="text" ref={discount_price} className='form-control' placeholder='Discount Price'  disabled={offerStatus === false ? true : false} />
                        {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                    </div>
                </div>
            </div>
        </div>
    );
}


Offer.propTypes = {
    offerBackground: PropTypes.any,
    offerHandle: PropTypes.any,
    offerStatus: PropTypes.any,
    remark: PropTypes.any, 
    discount: PropTypes.any, 
    discount_price: PropTypes.any,
}

export default Offer;
