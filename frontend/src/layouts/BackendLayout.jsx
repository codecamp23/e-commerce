import { useEffect, useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './partials/backend/Header';
import App from '../App';
import { useStateContext } from '../context/ContextProvider';
import Sidebar from './partials/backend/Sidebar';
import { ToastContainer } from 'react-toastify';

const BackendLayout = () => {
    const { user, token } = useStateContext();
    useEffect(() => {
        App();
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
