import { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import useNotify from './../../notify';
import { useNavigate } from 'react-router-dom';

const ProductContext = () => {
    const { successMsg, warningMsg } = useNotify();
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
    const productId = useRef();
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
    const meta_title = useRef();
    const meta_description = useRef();
    const [savePublishOrUnPublish, setSavePublishOrUnPublish] = useState('');
    const [errors, setErrors] = useState([]);
    const addForm = useRef();
    const navigate = useNavigate("");
    // get products start
    const [products, setProducts] = useState([]);
    // const [productsLength, setProductsLength] = useState(null);
    const [page, setPage] = useState(1);
    const [limit] = useState(3);
    const [totalPage, setTotalPage] = useState(null);
    const [productSearch, setProductSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({}); // product edit work start
    const updateForm = useRef(); // product edit work start
    // get products end
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
        try {
            const descriptionValue = $(description.current).summernote('code');
            const payload = {
                name: name.current.value,
                brand_id: brand_id.current.value,
                unit: unit.current.value,
                price: price.current.value,
                purchase_qty: purchase_qty.current.value,
                weight: weight.current.value,
                barcode: barcode.current.value,
                refundable: refundableYes.current.checked ? refundableYes.current.value : refundableNo.current.checked ? refundableNo.current.value : null,
                description: descriptionValue,
                category_id: category_id.current.value,
                color_id: colorStatus === true ? colorId === '' ? '' : colorId : null,
                measurement_points: sizeStatus === true ? measurement_points.current.value : null,
                measurement_type: sizeStatus === true ? inches_measurement_type.current.checked === true ? inches_measurement_type.current.value : centimeter_measurement_type.current.checked === true && centimeter_measurement_type.current.value : null,
                size: sizeStatus === true ? size_options.current.value : null,
                remark: offerStatus === true ? remark.current.value : null,
                discount: offerStatus === true ? discount.current.value : null,
                discount_price: offerStatus === true ? discount_price.current.value : null,
                vat: vatTaxStatus === true ? vat.current.value : null,
                tax: vatTaxStatus === true ? tax.current.value : null,
                vat_status: vatTaxStatus === true ? vatFlatOrPercent.current.value : null,
                tax_status: vatTaxStatus === true ? taxFlatOrPercent.current.value : null,
                tags: tags,
                image: Image.current.value,
                image_name: ImageName.current.value,
                image_size: ImageSize.current.value,
                image_extention: ImageExtention.current.value,
                meta_title: meta_title.current.value,
                meta_description: meta_description.current.value,
                status: savePublishOrUnPublish,
            }
            const response = await axiosClient.post(`/product-store`, payload);
            if (response.data.status === 'success') {
                navigate("/admin/products")
                successMsg(response.data.message);
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }

    const getAllProducts = async (Page, Search) => {
        setLoading(true);
        const response = await axiosClient.get(`/products-get?search=${Search}`);
        // setProductsLength(response.data.length);
        setTotalPage(Math.ceil(response.data.length / limit));
        getProducts(Page, limit, response.data);
        setLoading(false);
        console.log(response.data);
    }
    const getProducts = (Page, Limit, Products) => {
        let array = [];
        for (var i = (Page - 1) * Limit; i < (Page * Limit) && Products[i]; i++) {
            array.push(Products[i]);
        }
        setProducts(array);
    }
    const handlePageChange = (value) => {
        if (value === "... ") {
            setPage(1);
            getAllProducts(1, productSearch)
        } else if (value === "&lsaquo;") {
            if (page !== 1) {
                setPage(page - 1);
                getAllProducts(page - 1, productSearch)
            }
        } else if (value === "&rsaquo;") {
            if (page !== totalPage) {
                setPage(page + 1);
                getAllProducts(page + 1, productSearch)
            }
        } else if (value === " ...") {
            setPage(totalPage);
            getAllProducts(totalPage, productSearch)
        } else {
            setPage(value);
            getAllProducts(value, productSearch)
        }
    }
    const getProduct = async (id) => {
        const response = await axiosClient.get(`/product-edit/${id}`);
        if (response.data.image !== null) {
            setEditImageCount(1)
        }
        // console.log(response.data);
        if (response.data.color_id !== null) {
            setColorId(response.data.color_id);
            setColorStatus(true);
        }
        if (response.data.measurement_points !== null || response.data.measurement_type !== null || response.data.size !== null) {
            setSizeStatus(true);
        }
        if (response.data.remark !== null || response.data.discount !== null || response.data.discount_price !== null) {
            setOfferStatus(true);
        }
        if (response.data.vat !== null || response.data.tax !== null) {
            setVatTaxStatus(true);
        }
        if (response.data.meta_tag !== null) {
            const newArray = response.data.meta_tag.split(',').map((str, index) => ({
                id: str.trim(),
                text: str.trim()
            }));
            setTags(newArray);
        }
        setProduct(response.data);
    }

    const searchHandle = () => {

    }

    const updateData = async (e) => {
        e.preventDefault();
        try {
            const id = productId.current.value;
            const descriptionValue = $(description.current).summernote('code');
            const payload = {
                name: name.current.value,
                brand_id: brand_id.current.value,
                unit: unit.current.value,
                price: price.current.value,
                purchase_qty: purchase_qty.current.value,
                weight: weight.current.value,
                barcode: barcode.current.value,
                refundable: refundableYes.current.checked ? refundableYes.current.value : refundableNo.current.checked ? refundableNo.current.value : null,
                description: descriptionValue,
                category_id: category_id.current.value,
                color_id: colorStatus === true && colorId !== '' ? colorId : null,
                measurement_points: sizeStatus === true ? measurement_points.current.value : null,
                measurement_type: sizeStatus === true ? inches_measurement_type.current.checked === true ? inches_measurement_type.current.value : centimeter_measurement_type.current.checked === true && centimeter_measurement_type.current.value : null,
                size: sizeStatus === true ? size_options.current.value : null,
                remark: offerStatus === true ? remark.current.value : null,
                discount: offerStatus === true ? discount.current.value : null,
                discount_price: offerStatus === true ? discount_price.current.value : null,
                vat: vatTaxStatus === true ? vat.current.value : null,
                tax: vatTaxStatus === true ? tax.current.value : null,
                vat_status: vatTaxStatus === true ? vatFlatOrPercent.current.value : null,
                tax_status: vatTaxStatus === true ? taxFlatOrPercent.current.value : null,
                tags: tags,
                image: Image.current.value,
                image_name: ImageName.current.value,
                image_size: ImageSize.current.value,
                image_extention: ImageExtention.current.value,
                meta_title: meta_title.current.value,
                meta_description: meta_description.current.value,
                status: savePublishOrUnPublish,
            }
            const response = await axiosClient.post(`/product-update/${id}`, payload);
            console.log(response.data);
            if (response.data.status) {
                successMsg(response.data.message);
                navigate("/admin/products");
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }

    const refundableHandle = async (id) => {
        const response = await axiosClient.get(`/product-refundable-change/${id}`);
        if (response.data.status === 'success_yes') {
            successMsg(response.data.message);
        } else {
            warningMsg(response.data.message);
        }
    }
    const productStatus = async (id) => {
        const response = await axiosClient.get(`/product-status-change/${id}`);
        if (response.data.status === 'publish') {
            successMsg(response.data.message);
        } else {
            warningMsg(response.data.message);
        }
    }
    const dataDelete = async (id) => {
        const response = await axiosClient.get(`/product-delete/${id}`);
        if(response.data.status === 'success')
        {
            successMsg(response.data.message);
            await getAllProducts(page, productSearch);
        } 
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
        productId,
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
        colorId,
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
        meta_title,
        meta_description,
        setSavePublishOrUnPublish, // set publish or unpublish
        errors,
        AddData,
        addForm,
        getAllProducts, // product get start
        loading,
        products,
        page,
        limit,
        totalPage,
        productSearch,
        searchHandle,
        getProduct, // product edit start
        product,
        updateData,
        updateForm,
        refundableHandle,
        productStatus,
        dataDelete,
        handlePageChange
        // product information start
    }
}

export default ProductContext;
