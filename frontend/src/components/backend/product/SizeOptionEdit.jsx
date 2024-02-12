import { PropTypes } from 'prop-types';
import { useState } from 'react';

const SizeOptionEdit = ({ sizeBackground, sizeHandle, sizeStatus, measurement_points, size_options, inches_measurement_type, centimeter_measurement_type, product }) => {
    const [measurementType, setMeasurementType] = useState(false);
    let sizeCheck;
    let inchesMeasurementTypeCheck;
    let centimeterMeasurementTypeCheck;
    if (sizeStatus === true) {
        sizeCheck = true;
    } 
    if (product.measurement_type === 'Inches') {
        inchesMeasurementTypeCheck = true;
    } 
    if (product.measurement_type === 'Centimeter') {
        centimeterMeasurementTypeCheck = true;
    } 
    return (
        <div className="card" style={sizeBackground}>
            <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-4 d-flex justify-content-between align-items-center'>
                <span className="fs-6 fw-normal">Size</span>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => sizeHandle(sizeStatus)} defaultChecked={sizeCheck} />
                </div>
            </div>
            <div className="card-body pt-4">
                <div className="row pb-3">
                    <div className="col-md-5">
                        <label htmlFor="Measurement Points">Measurement Points <small className="text-danger ">*</small></label>
                    </div>
                    <div className="col-md-7">
                        <input type="text" ref={measurement_points} className="form-control" onKeyUp={() => setMeasurementType(true)} disabled={sizeStatus === false ? true : false} defaultValue={product.measurement_points} />
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-5">
                        <label htmlFor="Measurement Points">Size Options <small className="text-danger ">*</small></label>
                    </div>
                    <div className="col-md-7">
                        <select ref={size_options} className={`form-select ${sizeStatus === false && 'text-muted'}`} disabled={sizeStatus === false ? true : false}>
                            <option defaultValue="" className="">S</option>
                            <option selected={product.size === 'm' ? true : false} value="m">M</option>
                            <option selected={product.size === 'xl' ? true : false} value="xl">XL</option>
                            <option selected={product.size === 'xxl' ? true : false} value="xxl">XXL</option>
                            <option selected={product.size === 'xxxl' ? true : false} value="xxxl">XXXL</option>
                        </select>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-md-5">
                        <label htmlFor="Measurement Points">Measurement Type {measurementType === true && <small className="text-danger ">*</small>}</label>
                    </div>
                    <div className="col-md-7 d-xl-flex align-items-center ">
                        <div className="form-check me-3">
                            <input className="form-check-input" type="checkbox" ref={inches_measurement_type} name="Inches" id="Inches" defaultChecked={inchesMeasurementTypeCheck} disabled={sizeStatus === false ? true : false} defaultValue={'Inches'} />
                            <label className="form-check-label" htmlFor="Inches">
                                Inches
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" ref={centimeter_measurement_type} name="Centimeter" id="Centimeter" defaultChecked={centimeterMeasurementTypeCheck} disabled={sizeStatus === false ? true : false} defaultValue={'Centimeter'} />
                            <label className="form-check-label" htmlFor="Centimeter">
                                Centimeter
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


SizeOptionEdit.propTypes = {
    sizeBackground: PropTypes.any,
    sizeHandle: PropTypes.any,
    sizeStatus: PropTypes.any,
    measurement_points: PropTypes.any,
    size_options: PropTypes.any,
    inches_measurement_type: PropTypes.any,
    centimeter_measurement_type: PropTypes.any,
    product: PropTypes.any,
}

export default SizeOptionEdit;
