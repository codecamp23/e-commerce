import { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import useNotify from './../../notify';
import { useNavigate } from "react-router-dom";

const CategoryContext = () => {
    const {successMsg} = useNotify();
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
    // gallery image uploader end

    // category's work start
    const [brands, setBrands] = useState([]);
    const Name = useRef();
    const BrandId = useRef(null);
    const Image = useRef();
    const ImageName = useRef();
    const ImageSize = useRef();
    const ImageExtention = useRef();
    const MetaTitle = useRef();
    const MetaDes = useRef();
    const navigate = useNavigate("");
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(null);
    const [limit] = useState(5);
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [categoriesLength, setCategoriesLength] = useState(0);
    const [category, setCategory] = useState({});
    const [categorySearch, setCategorySearch] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    // category's work end


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

    // category's work start
    const getBrands = async () => {
        const response = await axiosClient.get('/brand-get');
        setBrands(response.data.data.brands);
    }
    const AddData = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: Name.current.value,
                brand_id: BrandId.current.value,
                image: Image.current.value,
                image_name: ImageName.current.value,
                image_size: ImageSize.current.value,
                image_extention: ImageExtention.current.value,
                meta_title: MetaTitle.current.value,
                meta_des: MetaDes.current.value,
            }
            // console.log(payload);
            const response = await axiosClient.post(`/category-store`, payload)
            console.log(response);
            if (response.data.status === 'success') {
                successMsg(response.data.message);
                navigate("/admin/category")
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }
    const getAtFirstCategories = async (Page, Search) => {
        setLoading(true);
        const response = await axiosClient.get(`/category-get?search=${Search}`);
        // console.log(response.data);
        setCategoriesLength(response.data.length);
        setTotalPage(Math.ceil(response.data.length / limit));
        getCategories(Page, limit, response.data);
        setLoading(false);
    }
    const getCategories = async (Page, Limit, Categories) => {
        let array = [];
        for (var i = (Page - 1) * Limit; i < (Page * Limit) && Categories[i]; i++) {
            array.push(Categories[i]);
        }
        setCategories(array);
    }
    const searchCategory = (e) => {
        setCategorySearch(e.target.value)
        getAtFirstCategories(page, e.target.value);
    }
    const handlePageChange = (value) => {
        if (value === "... ") {
            setPage(1);
            getAtFirstCategories(1, categorySearch)
        } else if (value === "&lsaquo;") {
            if (page !== 1) {
                setPage(page - 1);
                getAtFirstCategories(page - 1, categorySearch)
            }
        } else if (value === "&rsaquo;") {
            if (page !== totalPage) {
                setPage(page + 1);
                getAtFirstCategories(page + 1, categorySearch)
            }
        } else if (value === " ...") {
            setPage(totalPage);
            getAtFirstCategories(totalPage, categorySearch)
        } else {
            setPage(value);
            getAtFirstCategories(value, categorySearch)
        }
    }
    const categoryStatusChange = async (id) => {
        const response = await axiosClient.get(`/change-category-status/${id}`);
        if (response.data.status === 'success') {
            successMsg(response.data.message);
            getAtFirstCategories(page, search)
        }
    }
    const getCategory = async (id) => {
        const response = await axiosClient.get(`/category-edit/${id}`);
        setCategory(response.data);
        if (response.data.image) {
            setEditImageCount(1)
        }
    }
    const categoryImageRemove = () => {
        setEditImageCount(0)
    }
    const dataUpdate = async (id) => {
        try {
            const payload = {
                name: Name.current.value,
                brand_id: BrandId.current.value,
                image: Image.current.value,
                image_name: ImageName.current.value,
                image_size: ImageSize.current.value,
                image_extention: ImageExtention.current.value,
                meta_title: MetaTitle.current.value,
                meta_des: MetaDes.current.value,
            }
            const response = await axiosClient.post(`/category-update/${id}`, payload);
            if (response.data.status === 'success') {
                successMsg(response.data.message);
                navigate("/admin/category")
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }
    const deleteData = async (id) => {
        const response = await axiosClient.get(`/category-delete/${id}`);
        if (response.data.status === 'success') {
            successMsg(response.data.message);
            getAtFirstCategories(page, categorySearch);
        }
    }
    // category's work end

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
        getBrands,
        brands,
        Name,
        BrandId,
        MetaTitle,
        MetaDes,
        AddData,
        errors,
        getAtFirstCategories,
        loading,
        categoriesLength,
        categories,
        page,
        limit,
        totalPage,
        handlePageChange,
        categoryStatusChange,
        getCategory,
        category,
        deleteData,
        searchCategory,
        categorySearch,
        categoryId,
        categoryImageRemove,
        dataUpdate
    }
}

export default CategoryContext;
