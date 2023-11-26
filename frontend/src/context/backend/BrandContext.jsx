import { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import useNotify from './../../notify';

const BrandContext = () => {
    const { successMsg } = useNotify();
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState({});
    // const [url, setURL] = useState('');
    const [loading, setLoading] = useState(false);
    // for add brand
    const name = useRef();
    const Image = useRef();
    const meta_title = useRef();
    const meta_des = useRef();
    const [errors, setErrors] = useState({});
    const [errorHandle, setErrorHandle] = useState(false);

    const getBrands = async () => {
        const response = await axiosClient.get('/brand-get');
        setBrands(response.data.data.brands);
        setLoading(true)
    }
    const Add = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: name.current.value,
                image: Image.current.value,
                meta_title: meta_title.current.value,
                meta_description: meta_des.current.value
            }
            const response = await axiosClient.post('/brand-store', payload);
            if (response.data.status === 'success') {
                successMsg(response.data.message);
                await getBrands();
            }
        } catch (error) {
            setErrors(error.response.data.errors);
            setErrorHandle(true);
        }
    }
    const getBrand = async (id) => {
        const response = await axiosClient.get('/brand-edit/' + id);
        setBrand(response.data);
    }
    return {
        getBrands,
        brands,
        loading,
        name,
        Image,
        meta_title,
        meta_des,
        Add,
        errors,
        errorHandle,
        getBrand,
        brand
    }
}

export default BrandContext;
