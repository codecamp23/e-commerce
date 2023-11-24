import { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import useNotify from './../../notify';

const GalleryContext = () => {
    const { successMsg, warningMsg } = useNotify();
    const [galleryCategories, setGalleryCategories] = useState([]);
    const [galleries, setGalleries] = useState([]);
    const [trustBinGalleries, setTrustBinGalleries] = useState([]);
    const [gallery, setGallery] = useState({});
    const [galleryCategory, setGalleryCategory] = useState({});
    const [imageURL, setImageURL] = useState('');
    const name = useRef();
    const gallery_category_id = useRef();
    const image = useRef();
    const addFrom = useRef();
    const closeAddForm = useRef();
    const linkRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [nameErrorsHandle, setNameErrorsHandle] = useState(false);
    const [imageErrorsHandle, setImageErrorsHandle] = useState(false);
    // pagination
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [totalPage, setTotalPage] = useState();
    const [trustBinTotalPage, setTrustBinTotalPage] = useState();
    // get gallery with category id 
    const [galleryCategoryId, setGalleryCategoryId] = useState('');
    // get gallery search field
    const [search, setSearch] = useState('');
    // check id for delete multiple data
    const [selectedGalleries, setSelectedGalleries] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const getGalleryCategories = async () => {
        const response = await axiosClient.get('/gallery-category-get');
        setGalleryCategories(response.data);
    }

    // get data with pagination start
    const getAtFirstGalleries = async (page, galleryCategoryId, search) => {
        const response = await axiosClient.get(`/gallery-get?gallery_category_id=${galleryCategoryId}&search=${search}`);
        setTotalPage(Math.ceil(response.data.data.galleries.length / limit));
        getGalleries(page, limit, response.data.data.galleries);
        setImageURL(response.data.data.url);
    }
    const getGalleries = (Page, Limit, Gallery) => {
        let array = [];
        for (var i = (Page - 1) * Limit; i < (Page * Limit) && Gallery[i]; i++) {
            array.push(Gallery[i]);
        }
        setGalleries(array);
    }
    // galleries handlePageChange
    const handlePageChange = (value) => {
        if (value === "... ") {
            setPage(1);
            getAtFirstGalleries(1, galleryCategoryId, search)
        } else if (value === "&lsaquo;") {
            if (page !== 1) {
                setPage(page - 1);
                getAtFirstGalleries(page - 1, galleryCategoryId, search)
            }
        } else if (value === "&rsaquo;") {
            if (page !== totalPage) {
                setPage(page + 1);
                getAtFirstGalleries(page + 1, galleryCategoryId, search)
            }
        } else if (value === " ...") {
            setPage(totalPage);
            getAtFirstGalleries(totalPage, galleryCategoryId, search)
        } else {
            setPage(value);
            getAtFirstGalleries(value, galleryCategoryId, search)
        }
    }
    // get data with pagination start

    const add = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name.current.value);
            formData.append('gallery_category_id', gallery_category_id.current.value);
            formData.append('image', image.current.files[0]);
            const response = await axiosClient.post('/gallery-store', formData);
            if (response.data.status === 'success') {
                await getAtFirstGalleries(page, galleryCategoryId, search);
                closeAddForm.current.click();
                addFrom.current.reset();
                successMsg(response.data.message)
            }
        } catch (error) {
            setErrors(error.response.data.errors);
            setNameErrorsHandle(true);
            setImageErrorsHandle(true);
        }
    }

    const getDetailInfo = async (id) => {
        const response = await axiosClient.get(`/gallery-info/${id}`);
        setGallery(response.data.data.gallery);
        setGalleryCategory(response.data.data.gallery_category);
    }

    const handleCopyClick = () => {
        // Select the text in the input field
        linkRef.current.select();
        // Copy the selected text
        document.execCommand('copy');
        // Deselect the text
        window.getSelection().removeAllRanges();
        successMsg("Link copied to clipboard")
    }

    const DetailImageDownload = async (image) => {
        const response = await axiosClient.get('/gallery-image-detail-download/' + image, {
            responseType: 'blob',
        });
        // Create a blob URL for the image
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Create a link element and trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', gallery.image);
        document.body.appendChild(link);
        setTimeout(() => {
            link.click();
            document.body.removeChild(link);
        }, 500);
    }

    const imageDownload = async (image) => {
        const response = await axiosClient.get('/gallery-image-download/' + image, {
            responseType: 'blob',
        });
        // Create a blob URL for the image
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Create a link element and trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', image);
        document.body.appendChild(link);
        setTimeout(() => {
            link.click();
            document.body.removeChild(link);
        }, 500);
    }

    const deleteGallery = async (id) => {
        const response = await axiosClient.get('/gallery-delete/' + id);
        if (response.data.status === 'success') {
            successMsg(response.data.message);
            await getAtFirstGalleries(page, galleryCategoryId, search);
        }
    }

    // trust bin gallery start
    const getTrustBinGalleries = async (page, search) => {
        const response = await axiosClient.get(`/gallery-trust-bin-get?search=${search}`);
        console.log(response);
        setTrustBinTotalPage(Math.ceil(response.data.data.galleries.length / limit));
        getTrustBins(page, limit, response.data.data.galleries);
        setImageURL(response.data.data.url);
    }
    const getTrustBins = (Page, Limit, Galleries) => {
        let array = [];
        for (var i = (Page - 1) * Limit; i < (Page * Limit) && Galleries[i]; i++) {
            array.push(Galleries[i]);
        }
        setTrustBinGalleries(array);
    }

    // galleries handleTrustBinPageChange
    const handleTrustBinPageChange = (value) => {
        if (value === "... ") {
            setPage(1);
            getTrustBinGalleries(1, search)
        } else if (value === "&lsaquo;") {
            if (page !== 1) {
                setPage(page - 1);
                getTrustBinGalleries(page - 1, search)
            }
        } else if (value === "&rsaquo;") {
            if (page !== trustBinTotalPage) {
                setPage(page + 1);
                getTrustBinGalleries(page + 1, search)
            }
        } else if (value === " ...") {
            setPage(trustBinTotalPage);
            getTrustBinGalleries(trustBinTotalPage, search)
        } else {
            setPage(value);
            getTrustBinGalleries(value, search)
        }
    }

    const fileImage = async (id) => {
        const response = await axiosClient.get('/gallery-restore/' + id);
        if (response.data.status === 'success') {
            successMsg(response.data.message);
            await getTrustBinGalleries();
        }
    }
    const deletePermanently = async (id) => {
        const response = await axiosClient.get('/gallery-force-delete/' + id);
        if (response.data.status === 'success') {
            successMsg(response.data.message);
            await getTrustBinGalleries();
        }
    }
    const getTrustBinDetailInfo = async (id) => {
        const response = await axiosClient.get(`/gallery-trust-bin-info/${id}`);
        setGallery(response.data.data.gallery);
        setGalleryCategory(response.data.data.gallery_category);
    }
    // trust bin gallery end

    // get gallery with gallery category start
    const getGalleryWithCategory = async (e) => {
        setGalleryCategoryId(e.target.value);
        await getAtFirstGalleries(page, e.target.value, search)
    }
    // get gallery with gallery category end
    // get gallery search with gallery name start
    const onChangeSeach = async () => {
        setSearch(search);
        await getAtFirstGalleries(page, galleryCategoryId, search)
    }
    const onChangeSeachTrustBin = async () => {
        setSearch(search);
        await getTrustBinGalleries(page, search)
    }
    // get gallery  search with gallery name end


    // check id for multiple data delete start
    const handleCheckboxChange = galleryId => {
        setSelectedGalleries(prevSelectedItems => {
            if (prevSelectedItems.length === galleries.length) {
                // If all items were selected, uncheck "Select All"
                setSelectAll(false);
            }

            if (prevSelectedItems.includes(galleryId)) {
                // Unselect the item
                const updatedItems = prevSelectedItems.filter(id => id !== galleryId);
                return updatedItems;
            } else {
                // Select the item
                const updatedItems = [...prevSelectedItems, galleryId];
                return updatedItems;
            }
        });
        // setSelectedGalleries(prevSelectedItems => {
        //     if (prevSelectedItems.includes(galleryId)) {
        //         return prevSelectedItems.filter(id => id !== galleryId);
        //     } else {
        //         return [...prevSelectedItems, galleryId];
        //     }
        // });
    }
    const handleCheckboxChangeTrustBin = galleryId => {
        setSelectedGalleries(prevSelectedItems => {
            if (prevSelectedItems.length === trustBinGalleries.length) {
                // If all items were selected, uncheck "Select All"
                setSelectAll(false);
            }

            if (prevSelectedItems.includes(galleryId)) {
                // Unselect the item
                const updatedItems = prevSelectedItems.filter(id => id !== galleryId);
                return updatedItems;
            } else {
                // Select the item
                const updatedItems = [...prevSelectedItems, galleryId];
                return updatedItems;
            }
        });
    }
    const handleDeleteSelected = async () => {
        const response = await axiosClient.post('/gallery-delete-multiple', {
            ids: selectedGalleries
        });
        if (response.data.status === 'success') {
            successMsg(response.data.message)
            await getAtFirstGalleries(page, galleryCategoryId, search)
            setSelectedGalleries([]);
            setSelectAll(false);
        } else {
            warningMsg(response.data.message)
        }
    }
    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allItemIds = galleries.map(item => item.id);
            setSelectedGalleries(allItemIds);
        } else {
            setSelectedGalleries([]);
        }
    }
    const handleSelectAllChangeInTrustBin = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allItemIds = trustBinGalleries.map(item => item.id);
            setSelectedGalleries(allItemIds);
        } else {
            setSelectedGalleries([]);
        }
    }
    const handleRestoreSelected = async () => {
        const response = await axiosClient.post('/gallery-restore-multiple', {
            ids: selectedGalleries
        });
        if (response.data.status === 'success') {
            successMsg(response.data.message)
            await getTrustBinGalleries(page, search)
            setSelectedGalleries([]);
            setSelectAll(false);
        } else {
            warningMsg(response.data.message)
        }
    }
    const handlePermanentlyDeleteSelected = async () => {
        const response = await axiosClient.post('/gallery-force-delete-multiple', {
            ids: selectedGalleries
        });
        console.log(response);
        if (response.data.status === 'success') {
            successMsg(response.data.message)
            await getTrustBinGalleries(page, search)
            setSelectAll(false);
            setSelectedGalleries([]);
        } else {
            warningMsg(response.data.message)
        }
    }

    return {
        getGalleryCategories,
        galleryCategories,
        add,
        name,
        gallery_category_id,
        image,
        addFrom,
        closeAddForm,
        getAtFirstGalleries,
        getGalleries,
        galleries,
        imageURL,
        getDetailInfo,
        gallery,
        galleryCategory,
        handleCopyClick,
        linkRef,
        DetailImageDownload,
        imageDownload,
        deleteGallery,
        getTrustBinGalleries,
        getTrustBins,
        trustBinGalleries,
        fileImage,
        deletePermanently,
        getTrustBinDetailInfo,
        errors,
        nameErrorsHandle,
        setNameErrorsHandle,
        imageErrorsHandle,
        setImageErrorsHandle,
        // pagination
        page,
        setPage,
        limit,
        totalPage,
        handlePageChange,
        trustBinTotalPage,
        handleTrustBinPageChange,
        // get gallery with gallery category
        getGalleryWithCategory,
        galleryCategoryId,
        setSearch,
        search,
        // search 
        onChangeSeach,
        onChangeSeachTrustBin,
        // check id for multiple data delete
        selectedGalleries,
        handleCheckboxChange,
        handleDeleteSelected,
        selectAll,
        handleSelectAllChange,
        handleSelectAllChangeInTrustBin,
        handleRestoreSelected,
        handlePermanentlyDeleteSelected,
        handleCheckboxChangeTrustBin
    }
}

export default GalleryContext;
