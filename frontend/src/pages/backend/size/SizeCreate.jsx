import React, { useEffect, useRef } from "react";
import CategoryContext from './../../../context/backend/CategoryContext';
import PerfectScrollbar from "perfect-scrollbar";
import SizeForm from "../../../components/backend/size/SizeForm"; 
// import '../../../assets/backend/css/bootstrap-select.min.css'
// import Choices from 'choices.js';

const SizeCreate = () => {
    const { Name, BrandId, MetaTitle, MetaDes, AddData, errors } = CategoryContext(); 
    // const sortingRef = useRef(null);

    useEffect(() => {
        new PerfectScrollbar(".app-container")
        // const sortingElement = sortingRef.current;
        // const sortingClass = sortingElement.getAttribute('class');

        // const sortingChoices = new Choices(sortingElement, {
        //     placeholder: false,
        //     itemSelectText: ''
        // });

        // // Trick to apply your custom classes to the generated dropdown menu
        // sortingChoices.passedElement.element.parentElement.setAttribute('class', sortingClass);

        // // Cleanup when the component unmounts
        // return () => {
        //     sortingChoices.destroy();
        // }; 
    }, [])
    return (
        <React.Fragment>
            <div className="page-wrapper app-container">
                <div className="page-content">
                    <div className="row justify-content-center ">
                        <div className="col-md-7">
                            <div className="card rounded-1">
                                <div className='border border-top-0 border-end-0 border-start-0 border-bottom-2 border-light py-2 px-4 d-flex justify-content-between align-items-center'>
                                    <span className="fs-5 fw-normal">Size Configuration</span>
                                </div>
                                <SizeForm Name={Name} BrandId={BrandId} MetaTitle={MetaTitle} MetaDes={MetaDes} AddData={AddData} errors={errors} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SizeCreate;
