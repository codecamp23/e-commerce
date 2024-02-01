import { useRef, useState } from "react"
import axiosClient from "../../axios-client";
import useNotify from "../../notify";
import { useNavigate } from "react-router-dom";

const ColorContext = () => {
    const {successMsg} = useNotify();
    const [colors, setColors] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [totalPage, setTotalPage] = useState();
    const [loading, setLoading] = useState(true);
    const name = useRef();
    const color_code = useRef();
    const [errors, setErrors] = useState({});
    const addForm = useRef();
    // for edit
    const [color, setColor] = useState({});
    const colorId = useRef();
    const navigate = useNavigate("");

    const getAllColors = async (Page, Search) => {
        const response = await axiosClient.get(`/colors-get?search=${Search}`);
        // console.log(response);
        setTotalPage(Math.ceil(response.data.length / limit));
        getColors(Page, limit, response.data)
        if (loading === true) {
            setLoading(false)
        }
    }
    const getColors = async (Page, Limit, Colors) => {
        let array = [];
        for (var i = (Page - 1) * Limit; i < (Page * Limit) && Colors[i]; i++) {
            array.push(Colors[i]);
        }
        setColors(array)
    }

    const Add = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                name: name.current.value,
                color_code: color_code.current.value
            }
            const response = await axiosClient.post('/color-store', payload);
            console.log(response);
            if (response.data.status === 'success') {
                successMsg(response.data.message);
                await getAllColors(page, search);
                addForm.current.reset();
                setErrors({});
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }

    // seach 
    const colorSearchHandle = (e) => {
        setSearch(e.target.value);
        getAllColors(page, e.target.value);
    }
    const handlePageChange = (value) => {
        if (value === "... ") {
            setPage(1);
            getAllColors(1, search)
        } else if (value === "&lsaquo;") {
            if (page !== 1) {
                setPage(page - 1);
                getAllColors(page - 1, search)
            }
        } else if (value === "&rsaquo;") {
            if (page !== totalPage) {
                setPage(page + 1);
                getAllColors(page + 1, search)
            }
        } else if (value === " ...") {
            setPage(totalPage);
            getAllColors(totalPage, search)
        } else {
            setPage(value);
            getAllColors(value, search)
        }
    }

    // edit function
    const getColor = async (id) => {
        const response = await axiosClient.get(`/color-edit/${id}`);
        setColor(response.data);
    }
    const Edit = async (e) => {
      e.preventDefault();
        try {
            const id = colorId.current.value;
            const payload = {
                name: name.current.value,
                color_code: color_code.current.value
            }
            const response = await axiosClient.post(`/color-update/${id}`, payload);
            console.log(response);
            if (response.data.status === "success") {
                successMsg(response.data.message)
                navigate("/admin/colors")
            } else if (response.data.status === "unique") {
                successMsg(response.data.message)
                navigate("/admin/colors")
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }
    const Delete = async (id) => {
        const response = await axiosClient.get(`/color-delete/${id}`);
        if (response.data.status === "success") {
            successMsg(response.data.message);
            await getAllColors(page, search);
        }
    }
    return {
        getAllColors,
        page,
        limit,
        totalPage,
        loading,
        search,
        colors,
        name,
        color_code,
        Add,
        addForm,
        errors,
        colorSearchHandle,
        handlePageChange,
        // edit function and hocks
        getColor,
        color,
        colorId,
        Edit,
        Delete
    }
}

export default ColorContext;
