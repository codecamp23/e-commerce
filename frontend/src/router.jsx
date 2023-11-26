import { createBrowserRouter } from 'react-router-dom';
import FrontendLayout from './layouts/FrontendLayout';
import BackendLayout from './layouts/BackendLayout';
import Guestlayout from './layouts/Guestlayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Errors from './components/Errors';
import Dashboard from './pages/backend/Dashboard';
import Home from './pages/frontend/Home';
import Brand from './pages/backend/brand/Brand';
import Gallery from './pages/backend/Gallery';
import GalleryCategory from './pages/backend/GalleryCategory';
import GalleryTrustBin from './pages/backend/GalleryTrustBin';
import BrandEdit from './pages/backend/brand/BrandEdit';

const Router = createBrowserRouter([
    {
        element: <FrontendLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            }
        ]
    },
    {
        element: <Guestlayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/forget-password',
                element: <ForgetPassword />,
            },
            {
                path: '/reset-password/23hkjHJH21',
                element: <ResetPassword />,
            }
        ]
    },
    {
        element: <BackendLayout />,
        children: [
            {
                path: '/admin',
                element: <Dashboard />
            },
            {
                path: '/admin/brand',
                element: <Brand />
            },
            {
                path: '/admin/brand/:id',
                element: <BrandEdit />
            },
            {
                path: '/admin/gallery-category',
                element: <GalleryCategory />
            },
            {
                path: '/admin/gallery',
                element: <Gallery />
            },
            {
                path: '/admin/gallery-trust-bin',
                element: <GalleryTrustBin />
            }
        ]
    },
    {
        path: '/*',
        element: <Errors />
    }
]);

export default Router;
