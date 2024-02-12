import PageTitle from "../PageTitle";

const AddProductPageHeader = () => {
    return (
        <>
            <div className="pt-4 px-4 fw-semibold d-flex justify-content-between align-items-center ">
                <PageTitle pageTitle={'Add New Product'} />
            </div>
        </>
    );
}

export default AddProductPageHeader;
