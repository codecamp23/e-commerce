import { useEffect } from 'react';
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { Navigate, Outlet } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import Header from './partials/backend/Header';
import { useStateContext } from '../context/ContextProvider';
import Sidebar from './partials/backend/Sidebar';
import { ToastContainer } from 'react-toastify';

const BackendLayout = () => {
    const { user, token } = useStateContext();
    useEffect(() => {
        new PerfectScrollbar(".app-container")
    }, []);

    if (!token) {
        return <Navigate to="/login" />;
    } else {
        return (
            <div className="app-container">
                <div className="wrapper">
                    <Sidebar />
                    <Header />
                    {/* main content start */}
                    <Outlet />
                    {/* main content end */}

                    <ToastContainer />
                </div>
            </div>
        );
    }
}

export default BackendLayout;
