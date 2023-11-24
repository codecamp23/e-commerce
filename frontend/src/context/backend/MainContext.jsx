import { useRef, useState } from "react";
import axiosClient from "../../axios-client";

const MainContext = () => {
    const [galleries, setGalleries] = useState([]);
    // const [page, setGetUrl] = useState('');
    const [galleryCategories, setGalleryCategories] = useState([]);
    const [getGalleryCategoryId, setGalleryCategoryId] = useState('');
    const [search, setSearch] = useState('');
    const [galleryId, setGalleryId] = useState(null);
    const [URL, setURL] = useState('');
    const [ImageUrl, setImageUrl] = useState('');
    const [image, setImage] = useState('');
    const [imageCount, setImageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(null);
    const [lastPage, setLastPage] = useState(null);
    const imageUploadModalClose = useRef();

    const getGalleries = async (page, gallery_category_id, Search) => {
        const response = await axiosClient.get(`/galleries?page=${page}&gallery_category_id=${gallery_category_id}&search=${Search}`);
        console.log(response);
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
                getGalleries(page, getGalleryCategoryId)
            }
        } else {
            if (currentPage > 0) {
                page--;
                setCurrentPage(page)
                getGalleries(page, getGalleryCategoryId)
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
    const selectImage = (id, url) => {
        setGalleryId(id)
        setImageUrl(url)
    }
    const addFiles = () => {
        setImage(ImageUrl);
        setImageCount(1);
        imageUploadModalClose.current.click();
    }

    const removeImage = () => {
        setImage('')
        setImageCount(0);
    }

    return {
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
        addFiles,
        image,
        imageUploadModalClose,
        removeImage,
        imageCount,
        search
    }
}

export default MainContext;
