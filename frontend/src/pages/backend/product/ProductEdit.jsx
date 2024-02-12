import { useEffect } from 'react';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.css';
import '../../../assets/backend/plugins/simplebar/css/simplebar.css';
import '../../../assets/backend/plugins/metismenu/css/metisMenu.min.css';
import '../../../assets/backend/css/bootstrap.min.css';
import '../../../assets/backend/css/hierarchy-select.min.css';
import '../../../assets/backend/css/bootstrap-extended.css';
import '../../../assets/backend/css/app.css';
import '../../../assets/backend/css/icons.css';
import '../../../assets/backend/css/dark-theme.css';
import '../../../assets/backend/css/semi-dark.css';
import '../../../assets/backend/css/header-colors.css';
import '../../../assets/backend/css/header-colors.css';
import '../../../assets/backend/css/pace.min.css';
// js
import '../../../assets/backend/js/pace.min.js';
import '../../../assets/backend/js/jquery.min.js'
import '../../../assets/backend/js/bootstrap.bundle.min.js';
import '../../../assets/backend/js/hierarchy-select.js';
import '../../../assets/backend/plugins/simplebar/js/simplebar.min.js';
import '../../../assets/backend/plugins/metismenu/js/metisMenu.min.js';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.min.js';
import '../../../assets/backend/plugins/vectormap/jquery-jvectormap-world-mill-en.js';
import '../../../assets/backend/js/app.js';
import ImageUploader from '../../../components/backend/ImageUploader';
import ProductContext from '../../../context/backend/ProductContext';
import EditProductPageHeader from '../../../components/backend/product/EditProductPageHeader.jsx';
import { useParams } from 'react-router-dom';
import ProductInformationEdit from '../../../components/backend/product/ProductInformationEdit.jsx';
import SelectCategoryEdit from '../../../components/backend/product/SelectCategoryEdit.jsx';
import SelectColorEdit from '../../../components/backend/product/SelectColorEdit.jsx';
import SizeOptionEdit from '../../../components/backend/product/SizeOptionEdit.jsx';
import OfferEdit from '../../../components/backend/product/OfferEdit.jsx';
import VatTaxEdit from '../../../components/backend/product/VatTaxEdit.jsx';
import TagsEdit from '../../../components/backend/product/TagsEdit.jsx';

const ProductEdit = () => {
    const { id } = useParams();
    const {
        /*this methods for gallery start*/ getGalleries, gallery, getGalleryCategories, getGalleryCategoryId, search, galleryByCategory, galleryCategories, galleries, selectImage, galleryId, URL, currentPage, lastPage, pageHandle, imageUploadModalClose, onGallerySearch, setGallery, setImageCount, imageCount, removeImage, setGalleryImage, GalleryImage, Image, ImageName, ImageSize, ImageExtention, /*this methods for gallery end*/
        /* product create disable components handle start */ colorHandle, colorStatus, sizeHandle, sizeStatus, offerHandle, offerStatus, vatTaxHandle, vatTaxStatus, /* product create disable components handle end */
        /* product create page work start */ getBrands, brands, getCategories, categories, getColors, colors,  /* product field start */ name, brand_id, unit, price, purchase_qty, weight, barcode, refundableYes, refundableNo, description, category_id, colorId, setColorId, measurement_points, inches_measurement_type, centimeter_measurement_type, size_options, remark, /* that for offer */ discount, discount_price, vat, tax, vatFlatOrPercent, taxFlatOrPercent, setTags, tags, meta_title, meta_description, setSavePublishOrUnPublish, errors, updateData, updateForm,  /* product field end */ /* product create page work end */
        /* product edit page work start */ getProduct, product, editImageCount, productId, /* product edit page work start */
    } = ProductContext();
    // const { checkAuthentication } = AuthCheckContext();

    let colorBackground;
    let sizeBackground;
    let offerBackground;
    let vatTaxBackground;
    useEffect(() => {
        getProduct(id)
        // const userToken = localStorage.getItem('token');
        // checkAuthentication(userToken);
        // this function for gallery start
        getGalleries(currentPage, getGalleryCategoryId, search);
        getGalleryCategories();
        getBrands();
        getCategories();
        getColors();
        // this function for gallery end
        $('#selectColor').hierarchySelect({
            hierarchy: false,
            width: 'auto'
        });
    }, [])

    if (colorStatus === false) {
        colorBackground = { backgroundColor: "rgba(0, 0, 0, .1)" };
    } else {
        colorBackground = { backgroundColor: "" };
    }

    if (sizeStatus === false) {
        sizeBackground = { backgroundColor: "rgba(0, 0, 0, .1)" };
    } else {
        sizeBackground = { backgroundColor: "" };
    }

    if (offerStatus === false) {
        offerBackground = { backgroundColor: "rgba(0, 0, 0, .1)" };
    } else {
        offerBackground = { backgroundColor: "" };
    }

    if (vatTaxStatus === false) {
        vatTaxBackground = { backgroundColor: "rgba(0, 0, 0, .1)" };
    } else {
        vatTaxBackground = { backgroundColor: "" };
    }

    return (
        <div className="page-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <EditProductPageHeader />
                        {/* nav tab pills */}
                        {/* <div className="">
                            
                        </div> */}
                        <form onSubmit={updateData} ref={updateForm} className="row pt-2 px-3">
                            <input type="hidden" ref={productId} defaultValue={product.id} />
                            <ProductInformationEdit /*this methods for gallery start*/ imageCount={imageCount} gallery={gallery} Image={Image} ImageName={ImageName} ImageSize={ImageSize} ImageExtention={ImageExtention} removeImage={removeImage}  /*this methods for gallery end*/
                            /* product information start */ brands={brands} name={name} brand_id={brand_id} unit={unit} price={price} purchase_qty={purchase_qty} weight={weight} barcode={barcode} refundableYes={refundableYes} refundableNo={refundableNo} description={description} meta_title={meta_title} meta_description={meta_description} errors={errors} /* product information end */
                                product={product} editImageCount={editImageCount} />
                            <div className="col-lg-5">
                                <SelectCategoryEdit categories={categories} category_id={category_id} product={product} />

                                <SelectColorEdit colorBackground={colorBackground} colorHandle={colorHandle} colorStatus={colorStatus} colors={colors} setColorId={setColorId} product={product} colorId={colorId} />

                                <SizeOptionEdit sizeBackground={sizeBackground} sizeHandle={sizeHandle} sizeStatus={sizeStatus} measurement_points={measurement_points} inches_measurement_type={inches_measurement_type} centimeter_measurement_type={centimeter_measurement_type} size_options={size_options} product={product} />

                                <OfferEdit offerBackground={offerBackground} offerHandle={offerHandle} offerStatus={offerStatus} remark={remark} discount={discount} discount_price={discount_price} product={product} />

                                <VatTaxEdit vatTaxBackground={vatTaxBackground} vatTaxHandle={vatTaxHandle} vatTaxStatus={vatTaxStatus} vat={vat} tax={tax} vatFlatOrPercent={vatFlatOrPercent} taxFlatOrPercent={taxFlatOrPercent} product={product} />

                                <TagsEdit setTags={setTags} tags={tags} product={product} />
                            </div>
                            <div className="text-end">
                                <div className="text-end pb-2 pt-4">
                                    <button type="submit" onClick={() => setSavePublishOrUnPublish('unpublish')} className="btn btn-info px-4 py-2 text-light me-3">Update & UnPublish</button>
                                    <button type="submit" onClick={() => setSavePublishOrUnPublish('publish')} className="btn btn-success px-4 py-2 text-light me-3">Update & Publish</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ImageUploader galleryByCategory={galleryByCategory} galleryCategories={galleryCategories} galleries={galleries} selectImage={selectImage} galleryId={galleryId} url={URL} currentPage={currentPage} lastPage={lastPage} pageHandle={pageHandle} imageUploadModalClose={imageUploadModalClose} onGallerySearch={onGallerySearch} setGallery={setGallery} setImageCount={setImageCount} setGalleryImage={setGalleryImage} GalleryImage={GalleryImage} />
        </div>
    );
}

export default ProductEdit;
