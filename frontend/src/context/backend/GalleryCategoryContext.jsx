import { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import useNotify from "../../notify";

const GalleryCategoryContext = () => {
    const { successMsg } = useNotify();
    const galleryCategoryId = useRef();
    const updateGalleryCategoryId = useRef();
    const galleryCategoryName = useRef();
    const [GCId, setGCId] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const from = useRef();
    const updateForm = useRef();
    const closeUpdateModal = useRef();
    const deleteModalClose = useRef();
    const [galleryCategories, setGalleryCategories] = useState([]);
    const [galleryCategory, setGalleryCategory] = useState({});
    const [loading, setLoading] = useState(false);



    const getGalleryCategory = async () => {
        const response = await axiosClient.get('/gallery-category-get');
        setGalleryCategories(response.data);
        setLoading(true)
    }
    


    const galleryCategoryAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/gallery-category-store', {
                name: name
            });
            if (response.data.status === 'success') {
                successMsg(response.data.message)
                from.current.reset();
                await getGalleryCategory();
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }

    const edit = async (id) => {
        const response = await axiosClient.get(`/gallery-category-edit/${id}`);
        setGalleryCategory(response.data);
    }

    const update = async (e) => {
        e.preventDefault();
        const UpdateGCId = updateGalleryCategoryId.current.value;
        
        try {
            const response = await axiosClient.post('/gallery-category-update/' + UpdateGCId, {
                name: galleryCategoryName.current.value
            });
            if (response.data.status === 'success') {
                await getGalleryCategory();
                successMsg(response.data.message)
                updateForm.current.reset();
                closeUpdateModal.current.click();
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }

    const openDeleteModal = async (id) => {
        setGCId(id)
    }

    const Delete = async () => {
        const Id = galleryCategoryId.current.value;
        const response = await axiosClient.get("/gallery-category-delete/"+Id);
        if(response.data.status === 'success')
        {
            await getGalleryCategory();
            deleteModalClose.current.click();
            successMsg(response.data.message)
        }
    }

    return {
        setName,
        name,
        galleryCategoryAdd,
        from,
        errors,
        getGalleryCategory,
        galleryCategories,
        loading,
        edit,
        galleryCategory,
        update,
        galleryCategoryId,
        updateGalleryCategoryId,
        galleryCategoryName,
        updateForm,
        closeUpdateModal,
        openDeleteModal,
        GCId,
        Delete,
        deleteModalClose
    }
}

export default GalleryCategoryContext;
