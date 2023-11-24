import { useState } from "react";
import axiosClient from "../../axios-client";

const BrandContext = () => {
    const [brands, setBrands] = useState([]);
    const [url, setURL] = useState('');
    const [loading, setLoading] = useState(false);
    const getBrands = async () => {
        const response = await axiosClient.get('/brand-get');
        setBrands(response.data.data.brands);
        setURL(response.data.data.url);
        setLoading(true)
    }
    return {
        getBrands,
        brands,
        url,
        loading
    }
}

export default BrandContext;
