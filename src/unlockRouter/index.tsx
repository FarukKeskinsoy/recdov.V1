import { createBrowserRouter } from 'react-router-dom';
import {   unlockRoutes } from './unlockRoutes';
import AuthLayout from '../components/Layouts/AuthLayout';

const finalRoutes = unlockRoutes.map((route) => {
    return {
        ...route,
        element: <AuthLayout>{route.element}</AuthLayout>,
    };
});

const unlockRouter = createBrowserRouter(finalRoutes);

export default unlockRouter;
