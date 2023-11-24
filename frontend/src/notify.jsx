// import "toastify-js/src/toastify.css";
// import Toastify from 'toastify-js';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const useNotify = () => {
    const successMsg = (msg) => {
        toast.success('😀 ' + msg, {
            position: "bottom-right",
            autoClose: 2100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const warningMsg = (msg) => {
        toast.warning('😱 ' + msg, {
            position: "bottom-right",
            autoClose: 2100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const failMsg = (msg) => {
        toast.warning('😭 ' + msg, {
            position: "bottom-right",
            autoClose: 2100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return {
        successMsg,
        warningMsg,
        failMsg,
    }
}

export default useNotify;
