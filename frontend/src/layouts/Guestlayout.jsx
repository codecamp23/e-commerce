import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import App from "../App";
import { ToastContainer } from "react-toastify";

const Guestlayout = () => {
    const { token } = useStateContext();
    useEffect(() => {
        App();
    }, []);

    if (token) {
        return <Navigate to="/admin" />;
    } else {

        return (
            <div className="app-container">
                <Outlet />

                <ToastContainer />
            </div>
        );
    }
}

export default Guestlayout;
