import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.request.use((response) => {
    return response;
}, (error) => {
    // try {
    //     const { response } = error;
    //     if (response.status === 401) {
    //         localStorage.removeItem("token");
    //     }
    // } catch (error) {
    //     console.error(error);
    // }
    const { response } = error;
    if (response.status === 401) {
        localStorage.removeItem("token");
    }

    throw error;
});

export default axiosClient;