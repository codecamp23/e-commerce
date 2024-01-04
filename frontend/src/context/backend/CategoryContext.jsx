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
    const novigate = useNavigate("");
    const [errors, setErrors] = useState([]);
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
                novigate("/admin/category")
            }
        } catch (error) {
            setErrors(error.response.data.errors);
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
        errors
    }
}

export default CategoryContext;
