import { PropTypes } from 'prop-types';
import React from 'react';

const SelectColorEdit = ({ colorBackground, colorHandle, colorStatus, colors, setColorId, product, color_id, colorId }) => {
    let colorCheck;
    if (colorStatus === true) { 
        colorCheck = true;
    }

    return (
        <div className="card" style={colorBackground}>
            <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-4 d-flex justify-content-between align-items-center'>
                <span className="fs-6 fw-normal">Select Color</span>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => colorHandle(colorStatus)} defaultChecked={colorCheck} />
                </div>
            </div>

            <div className="card-body pt-4">
                <div className="row pb-3">
                    <div className="dropdown hierarchy-select col-md-12" id="selectColor">
                        {/* <input type="hidden" defaultValue={colorId} /> */}
                        <button
                            type="button"
                            className={`btn btn-${colorStatus === false ? `muted` : `light`} text-start w-100 border border-2 border-muted`}
                            id="example-two-button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            disabled={colorStatus === false ? true : false}
                        >
                            {colors.length > 0 && product.color_id !== null ? colors.map((color, index) => (
                                <React.Fragment key={index + 1}>
                                    {product.color_id === color.id && <a className="dropdown-item" data-value="" onClick={() => setColorId(color.id)} data-default-selected="" href="#">
                                        {color.name}
                                    </a>}
                                </React.Fragment>
                            )) : <a className="dropdown-item" data-value="" onClick={() => setColorId('')} data-default-selected="" href="#">
                                Colors
                            </a>}
                        </button>
                        <div className="dropdown-menu w-100" aria-labelledby="example-two-button">
                            <div className="hs-searchbox">
                                <input type="text" className="form-control" autoComplete="off" />
                            </div>
                            <div className="hs-menu-inner">
                                {/* {product.color_id === null && <a className="dropdown-item" data-value="" onClick={() => setColorId('')} data-default-selected="" href="#">
                                    Colors
                                </a>} */}
                                {colors.length > 0 && colors.map((color, index) => (<a key={index + 1} className="dropdown-item" onClick={() => setColorId(color.id)} data-value={color.id} href="#">
                                    {color.name}
                                </a>))}
                            </div>
                        </div>
                        <input className="d-none" name="example_two" readOnly="readonly" aria-hidden="true" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

SelectColorEdit.propTypes = {
    colorBackground: PropTypes.any,
    colorHandle: PropTypes.any,
    colorStatus: PropTypes.any,
    colors: PropTypes.any,
    product: PropTypes.any,
    setColorId: PropTypes.any,
    color_id: PropTypes.any,
    colorId: PropTypes.any,
}

export default SelectColorEdit;
