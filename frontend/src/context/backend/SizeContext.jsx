import { useState } from "react"


const SizeContext = () => {
    const [sizesLength, setSizeLength] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [totalPage, setTotalPage] = useState(null);

    const handlePageChange = (value) => {
      
    }
    const sizeStatusChange = () => {
      
    }
    const deleteData = (id) => {
      alert(id)
    }
    return {
        sizesLength,
        sizes,
        page,
        limit,
        totalPage,
        handlePageChange,
        sizeStatusChange,
        deleteData
    }
}

export default SizeContext;
