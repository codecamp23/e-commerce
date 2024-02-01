import { PropTypes } from 'prop-types';

const VatTax = ({ vatTaxBackground, vatTaxHandle, vatTaxStatus, vat, tax, vatFlatOrPercent, taxFlatOrPercent }) => {
    return (
        <div className="card" style={vatTaxBackground}>
            <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-4 d-flex justify-content-between align-items-center'>
                <span className="fs-6 fw-normal">Vat & TAX</span>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => vatTaxHandle(vatTaxStatus)} defaultChecked={vatTaxStatus} />
                </div>
            </div>
            <div className="card-body pt-4">
                <div className="row pb-3">
                    <div className="col-md-6">
                        <input type="text" className='form-control' ref={vat} defaultValue={0} disabled={vatTaxStatus === false ? true : false} />
                    </div>
                    <div className="col-md-6">
                        <select ref={vatFlatOrPercent} className={`form-select ${vatTaxStatus === false && 'text-muted'}`} disabled={vatTaxStatus === false ? true : false}>
                            <option defaultValue="Flat">Flat</option>
                            <option defaultValue="Percent">Percent</option>
                        </select>
                        {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-6"> 
                        <input type="text" className='form-control' ref={tax} defaultValue={0} disabled={vatTaxStatus === false ? true : false} />
                    </div>
                    <div className="col-md-6">
                        <select ref={taxFlatOrPercent} className={`form-select ${vatTaxStatus === false && 'text-muted'}`} disabled={vatTaxStatus === false ? true : false}>
                            <option defaultValue="Flat">Flat</option>
                            <option defaultValue="Percent">Percent</option>
                        </select>
                        {/* {errors.name && <small className='text-danger ps-2'>{errors.name}</small>} */}
                    </div>
                </div>
            </div>
        </div>
    );
}


VatTax.propTypes = {
    vatTaxBackground: PropTypes.any,
    vatTaxHandle: PropTypes.any,
    vatTaxStatus: PropTypes.any,
    vat: PropTypes.any,
    tax: PropTypes.any,
    vatFlatOrPercent: PropTypes.any,
    taxFlatOrPercent: PropTypes.any,
}

export default VatTax;
