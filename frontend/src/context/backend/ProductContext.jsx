import { useRef, useState } from "react";
import axiosClient from "../../axios-client";

const ProductContext = () => {
    // gallery image uploader start
    const [galleries, setGalleries] = useState([]);
    const [URL, setURL] = useState('');
    const [lastPage, setLastPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    const [galleryCategories, setGalleryCategories] = useState([]);
    const [galleryId, setGalleryId] = useState(null);
    const [GalleryImage, setGalleryImage] = useState({
        url: '',
        name: '',
        size: '',
        extention: ''
    });
    const [getGalleryCategoryId, setGalleryCategoryId] = useState('');
    const [search, setSearch] = useState('');
    const imageUploadModalClose = useRef();
    const [gallery, setGallery] = useState({
        image: '',
        image_name: '',
        image_size: '',
        image_extention: '',
    });
    const [imageCount, setImageCount] = useState(0);
    const [editImageCount, setEditImageCount] = useState(0);
    const Image = useRef();
    const ImageName = useRef();
    const ImageSize = useRef();
    const ImageExtention = useRef();
    // gallery image uploader end

    // product create disable components handle start
    const [colorStatus, setColorStatus] = useState(false);
    const [sizeStatus, setSizeStatus] = useState(false);
    const [offerStatus, setOfferStatus] = useState(false);
    const [vatTaxStatus, setVatTaxStatus] = useState(false);
    // product create disable components handle end 
    // product create page work start
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const name = useRef();
    const brand_id = useRef();
    const unit = useRef();
    const price = useRef();
    const purchase_qty = useRef();
    const weight = useRef();
    const barcode = useRef();
    // const image = useRef();
    const refundableYes = useRef();
    const refundableNo = useRef();
    const description = useRef();
    const category_id = useRef();
    // const color_id = useRef();
    const [colorId, setColorId] = useState('');
    const measurement_points = useRef();
    const inches_measurement_type = useRef();
    const centimeter_measurement_type = useRef();
    const size_options = useRef();
    const remark = useRef(); // that for offer
    const discount = useRef();
    const discount_price = useRef();
    const vat = useRef();
    const tax = useRef(); 
    const vatFlatOrPercent = useRef();
    const taxFlatOrPercent = useRef();
    const [tags, setTags] = useState([]);
    const [savePublishOrUnPublish, setSavePublishOrUnPublish] = useState('');
    const [errors, setErrors] = useState([]);
    const addForm = useRef();
    // product create page work end


    // this for image gallery start
    const getGalleries = async (page, gallery_category_id, Search) => {
        const response = await axiosClient.get(`/galleries?page=${page}&gallery_category_id=${gallery_category_id}&search=${Search}`);
        // console.log(response.data.data.galleries.data);
        setGalleries(response.data.data.galleries.data);
        setURL(response.data.data.url);
        setLastPage(response.data.data.galleries.last_page);
        setCurrentPage(response.data.data.galleries.current_page);
    }
    const getGalleryCategories = async () => {
        const response = await axiosClient.get('/galleryCategories');
        setGalleryCategories(response.data);
    }
    const galleryByCategory = async (e) => {
        setGalleryCategoryId(e.target.value)
        getGalleries(1, e.target.value, search)
    }
    const selectImage = (id, url, image_name, image_size, image_extention) => {
        setGalleryId(id)
        setGalleryImage({
            url: url,
            name: image_name,
            size: image_size,
            extention: image_extention
        })
    }
    const pageHandle = (page, btn) => {
        if (btn === 'next') {
            if (currentPage !== lastPage) {
                page++;
                setCurrentPage(page)
                getGalleries(page, getGalleryCategoryId, search)
            }
        } else {
            if (currentPage > 0) {
                page--;
                setCurrentPage(page)
                getGalleries(page, getGalleryCategoryId, search)
            }
        }
    }
    const onGallerySearch = (e) => {
        setSearch(e.target.value)
        getGalleries(1, getGalleryCategoryId, e.target.value)
    }
    const removeImage = () => {
        setGallery('')
        setImageCount(0);
    }
    // this for image gallery end

    // product create disable components handle start
    const colorHandle = (status) => {
        if (status === false) {
            setColorStatus(true)
        } else {
            setColorStatus(false)
        }
    }
    const sizeHandle = (status) => {
        if (status === false) {
            setSizeStatus(true)
        } else {
            setSizeStatus(false)
        }
    }
    const offerHandle = (status) => {
        if (status === false) {
            setOfferStatus(true)
        } else {
            setOfferStatus(false)
        }
    }
    const vatTaxHandle = (status) => {
        if (status === false) {
            setVatTaxStatus(true)
        } else {
            setVatTaxStatus(false)
        }
    }
    // product create disable components handle end
    // product create page work start
    const getBrands = async () => {
        const response = await axiosClient.get(`/brand-get`);
        setBrands(response.data.data.brands);
    }
    const getCategories = async () => {
        const response = await axiosClient.get(`/category-get`);
        setCategories(response.data);
    }
    const getColors = async () => {
        const response = await axiosClient.get(`/colors-get`);
        setColors(response.data);
    }

    // add product data 
    const AddData = async (e) => {
        e.preventDefault();
        const descriptionValue = $(description.current).summernote('code');
        const payload = {
            name: name.current.value,
            brand_id: brand_id.current.value,
            unit: unit.current.value,
            price: price.current.value,
            purchase_qty: purchase_qty.current.value,
            weight: weight.current.value,
            barcode: barcode.current.value,
            refundableYes: refundableYes.current.value,
            refundableNo: refundableNo.current.value,
            description: descriptionValue,
            category_id: category_id.current.value,
            colorId: colorStatus === true ? colorId === '' ? '' : colorId : null,
            measurement_points: sizeStatus === true ? measurement_points.current.value : null,
            measurement_type: sizeStatus === true ? inches_measurement_type.current.checked === true ? inches_measurement_type.current.value : centimeter_measurement_type.current.checked === true && centimeter_measurement_type.current.value : null,
            size_options: sizeStatus === true ? size_options.current.value : null,
            remark: offerStatus === true ? remark.current.value : null,
            discount: offerStatus === true ? discount.current.value : null,
            discount_price: offerStatus === true ? discount_price.current.value : null,
            vat: vatTaxStatus === true ? vat.current.value : null,
            tax:  vatTaxStatus === true ? tax.current.value : null,
            vatFlatOrPercent:  vatTaxStatus === true ? vatFlatOrPercent.current.value : null,
            taxFlatOrPercent:  vatTaxStatus === true ? taxFlatOrPercent.current.value : null,
            tags: tags,
            savePublishOrUnPublish: savePublishOrUnPublish,
            image: Image.current.value,
            image_name: ImageName.current.value,
            image_size: ImageSize.current.value,
            image_extention: ImageExtention.current.value,
        }
        const response = await axiosClient.get(`/product-store`, payload);
        console.log(response);
        // if (refundableNo.current.checked) {
        //     console.log(refundableNo.current.value)
        // }
        // if (inches_measurement_type.current.checked && centimeter_measurement_type.current.checked === false) { 
        //     console.log(inches_measurement_type.current.value);
        // }
        // if (centimeter_measurement_type.current.checked && inches_measurement_type.current.checked === false) { 
        //     console.log(centimeter_measurement_type.current.value);
        // }
        // console.log(colorId);
        // console.log(vat.current.value);
    }


    return {
        // gallery image uploader start
        getGalleries,
        getGalleryCategoryId,
        search,
        getGalleryCategories,
        galleryByCategory,
        galleryCategories,
        galleries,
        gallery,
        selectImage,
        galleryId,
        URL,
        currentPage,
        lastPage,
        pageHandle,
        imageUploadModalClose,
        onGallerySearch,
        setGallery,
        setImageCount,
        removeImage,
        setGalleryImage,
        GalleryImage,
        // imageInfoForm,
        editImageCount,
        imageCount,

        Image,
        ImageName,
        ImageSize,
        ImageExtention,
        // gallery image uploader end

        // product create disable components handle start
        colorHandle,
        colorStatus,
        sizeHandle,
        sizeStatus,
        offerHandle,
        offerStatus,
        vatTaxHandle,
        vatTaxStatus,
        // product create disable components handle end
        // product information start
        getBrands,
        brands,
        getCategories,
        categories,
        getColors,
        colors,
        name, // product field start
        brand_id,
        unit,
        price,
        purchase_qty,
        weight,
        barcode,
        refundableYes,
        refundableNo,
        description,
        category_id,
        // color_id,
        setColorId,
        measurement_points,
        inches_measurement_type,
        centimeter_measurement_type,
        size_options,
        remark, // that for offer
        discount,
        discount_price,
        vat,
        tax,
        vatFlatOrPercent,
        taxFlatOrPercent,
        setTags,
        tags, // product field end
        setSavePublishOrUnPublish, // set publish or unpublish
        errors,
        AddData,
        addForm
        // product information start
    }
}

export default ProductContext;
