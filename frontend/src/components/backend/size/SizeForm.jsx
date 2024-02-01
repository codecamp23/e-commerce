import { PropTypes } from 'prop-types';
import '../../../assets/backend/css/bootstrap-select.min.css';

const SizeForm = ({ MetaTitle, AddData, errors, sortingRef }) => {
    // const sortingRef = useRef(null);
    // useEffect(() => {

    //     const sortingElement = sortingRef.current;
    //     console.log(sortingRef.current);
    //     const sortingClass = sortingElement.getAttribute('class');

    //     const sortingChoices = new Choices(sortingElement, {
    //         placeholder: false,
    //         itemSelectText: ''
    //     });

    //     // Trick to apply your custom classes to the generated dropdown menu
    //     sortingChoices.passedElement.element.parentElement.setAttribute('class', sortingClass);

    //     // Cleanup when the component unmounts
    //     return () => {
    //         sortingChoices.destroy();
    //     }; 
    // }, [])
    return (
        <form onSubmit={AddData} className="card-body">
            <div className="row pb-3 pt-2">
                <div className="col-md-3">Measurement Points <small className='text-danger'>*</small></div>
                <div className="col-md-9">
                    <label>Minimal</label>
                    <select ref={sortingRef} className="selectpicker form-control border-0 mb-1 px-4 py-4 rounded shadow">
                        <option value="Ultrasound Knee Right">Ultrasound Knee Right</option>
                        <option value="Ultrasound Knee Left">Ultrasound Knee Left</option>
                        <option value="MRI Knee Right">MRI Knee Right</option>
                        <option value="MRI Knee Left">MRI Knee Left</option>
                        <option value="MRI Forearm/Elbow Right">MRI Forearm/Elbow Right</option>
                        <option value="MRI Forearm/Elbow Left">MRI Forearm/Elbow Left</option>
                        <option value="CT Knee Right">CT Knee Right</option>
                        <option value="CT Knee Left">CT Knee Left</option>
                    </select>


                    {errors.name && <small className='text-danger ps-2'>{errors.name}</small>}
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-3">Measurement Type <small className='text-danger'>*</small></div>
                <div className="col-md-9">
                    <input type="text" ref={MetaTitle} className='form-control' placeholder='Meta Title' />
                    {errors.meta_title && <small className='text-danger ps-2'>{errors.meta_title}</small>}
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-3">Size Options <small className='text-danger'>*</small></div>
                <div className="col-md-9">
                    <input type="text" ref={MetaTitle} className='form-control' placeholder='Meta Title' />
                    {errors.meta_title && <small className='text-danger ps-2'>{errors.meta_title}</small>}
                </div>
            </div>
            <div className="text-end pt-1 pb-2">
                <button type="submit" className="btn btn-info px-4 py-2 text-light">Save</button>
            </div>
        </form>
    );
}

SizeForm.propTypes = {
    MetaTitle: PropTypes.any,
    MetaDes: PropTypes.any,
    AddData: PropTypes.any,
    errors: PropTypes.any,
}

export default SizeForm;
