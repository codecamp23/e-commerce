import { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import useNotify from './../../notify';
import { useNavigate } from "react-router-dom";

const BrandContext = () => {
    const [galleries, setGalleries] = useState([]);
    // const [page, setGetUrl] = useState('');
    const [galleryCategories, setGalleryCategories] = useState([]);
    const [getGalleryCategoryId, setGalleryCategoryId] = useState('');
    const [search, setSearch] = useState('');
    const [galleryId, setGalleryId] = useState(null);
    const [URL, setURL] = useState('');
    const [GalleryImage, setGalleryImage] = useState({
        url: '',
        name: '',
        size: '',
        extention: ''
    });
    const [gallery, setGallery] = useState({
        image: '',
        image_name: '',
        image_size: '',
        image_extention: '',
    });
    const [imageCount, setImageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(null);
    const [lastPage, setLastPage] = useState(null);
    const imageUploadModalClose = useRef();

    // that's pagination 
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [totalPage, setTotalPage] = useState();

    // this work for brand crud ===>
    const { successMsg } = useNotify();
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState({});
    // const [url, setURL] = useState('');
    const [loading, setLoading] = useState(false);
    // for add brand
    const brandId = useRef();
    const name = useRef();
    const Image = useRef();
    const ImageName = useRef();
    const ImageSize = useRef();
    const ImageExtention = useRef();
    const meta_title = useRef();
    const meta_des = useRef();
    const addForm = useRef();
    const closeDeleteModal = useRef();
    const [imageRemover, setImageRemover] = useState(false);
    const [errors, setErrors] = useState({});
    const [errorHandle, setErrorHandle] = useState(false);
    const navigate = useNavigate("");
    const [editImageCount, setEditImageCount] = useState(0);
    const [searchBrand, setSearchBrand] = useState('');

    // this for image gallery start
    const getGalleries = async (page, gallery_category_id, Search) => {
        const response = await axiosClient.get(`/galleries?page=${page}&gallery_category_id=${gallery_category_id}&search=${Search}`);
        // console.log(response);
        setGalleries(response.data.data.galleries.data);
        setURL(response.data.data.url);
        setLastPage(response.data.data.galleries.last_page);
        setCurrentPage(response.data.data.galleries.current_page);
    }
    const getGalleryCategories = async () => {
        const response = await axiosClient.get('/galleryCategories');
        setGalleryCategories(response.data);
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
    const galleryByCategory = async (e) => {
        setGalleryCategoryId(e.target.value)
        getGalleries(1, e.target.value, search)
    }
    const onGallerySearch = (e) => {
        setSearch(e.target.value)
        getGalleries(1, getGalleryCategoryId, e.target.value)
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
    const removeImage = () => {
        setGallery('')
        setImageCount(0);
    }
    const brandImageRemove = () => {
        setEditImageCount(0)
    }
    // this for image gallery end

    // brand crud ===>
    const getAtFirstBrands = async (Page, Search) => {
        const response = await axiosClient.get(`/brand-get?search=${Search}`);
        // console.log(response);
        setTotalPage(Math.ceil(response.data.data.brands.length / limit));
        getBrands(Page, limit, response.data.data.brands);
        setLoading(true)
    }
    const getBrands = (Page, Limit, Brands) => {
        let array = [];
        for (var i = (Page - 1) * Limit; i < (Page * Limit) && Brands[i]; i++) {
            array.push(Brands[i]);
        }
        setBrands(array);
    }
    // handlePageChange for pagination
    const handlePageChange = (value) => {
        if (value === "... ") {
            setPage(1);
            getAtFirstBrands(1, searchBrand)
        } else if (value === "&lsaquo;") {
            if (page !== 1) {
                setPage(page - 1);
                getAtFirstBrands(page - 1, searchBrand)
            }
        } else if (value === "&rsaquo;") {
            if (page !== totalPage) {
                setPage(page + 1);
                getAtFirstBrands(page + 1, searchBrand)
            }
        } else if (value === " ...") {
            setPage(totalPage);
            getAtFirstBrands(totalPage, searchBrand)
        } else {
            setPage(value);
            getAtFirstBrands(value, searchBrand)
        }
    }
    const Add = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: name.current.value,
                image: Image.current.value,
                image_name: ImageName.current.value,
                image_size: ImageSize.current.value,
                image_extention: ImageExtention.current.value,
                meta_title: meta_title.current.value,
                meta_description: meta_des.current.value
            }
            const response = await axiosClient.post('/brand-store', payload);
            if (response.data.status === 'success') {
                successMsg(response.data.message);
                await getAtFirstBrands(page, searchBrand);
                addForm.current.reset();
                setImageRemover(true);
                removeImage()
            }
        } catch (error) {
            setErrors(error.response.data.errors);
            setErrorHandle(true);
        }
    }
    const getBrand = async (id) => {
        const response = await axiosClient.get('/brand-edit/' + id);
        setBrand(response.data);
        if (response.data.image) {
            setEditImageCount(1)
        }
    }
    const Update = async () => {
        try {
            const brand_id = brandId.current.value;
            const payload = {
                name: name.current.value,
                image: Image.current.value,
                image_name: ImageName.current.value,
                image_size: ImageSize.current.value,
                image_extention: ImageExtention.current.value,
                meta_title: meta_title.current.value,
                meta_description: meta_des.current.value
            }
            const response = await axiosClient.post(`/brand-update/${brand_id}`, payload);
            if (response.data.status === 'success') {
                successMsg(response.data.message);
                navigate("/admin/brand")
            }
        } catch (error) {
            console.error(error);
        }
    }
    const Delete = async () => {
        const brand_id = brandId.current.value;
        const response = await axiosClient.get(`/brand-delete/${brand_id}`);
        if (response.data.status === 'success') {
            successMsg(response.data.message);
            await getAtFirstBrands(page, searchBrand);
            closeDeleteModal.current.click();
        }
    }

    const brandSearchHandle = (e) => {
        setSearchBrand(e.target.value);
        getAtFirstBrands(page, e.target.value);
    }

    return {
        // this for image gallery
        galleries,
        getGalleries,
        URL,
        currentPage,
        lastPage,
        pageHandle,
        galleryByCategory,
        getGalleryCategories,
        galleryCategories,
        getGalleryCategoryId,
        selectImage,
        galleryId,
        onGallerySearch,
        // addFiles,
        setGallery,
        GalleryImage,
        gallery,
        imageUploadModalClose,
        removeImage,
        brandImageRemove,
        imageCount,
        setImageCount,
        search,

        // for curd
        getAtFirstBrands,
        getBrands,
        brands,
        loading,
        brandId,
        name,
        Image,
        ImageName,
        ImageSize,
        ImageExtention,
        meta_title,
        meta_des,
        Add,
        errors,
        errorHandle,
        getBrand,
        brand,
        addForm,
        editImageCount,
        setEditImageCount,
        Update,
        Delete,
        closeDeleteModal,
        imageRemover,

        // for pagination
        page,
        limit,
        totalPage,
        handlePageChange,

        // search
        brandSearchHandle
    }
}

export default BrandContext;
