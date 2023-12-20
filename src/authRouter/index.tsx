import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import {  authroutes } from './authroutes';
import AuthLayout from '../components/Layouts/AuthLayout';

const finalRoutes = authroutes.map((route) => {
    return {
        ...route,
        element: <AuthLayout>{route.element}</AuthLayout>,
    };
});

const authRouter = createBrowserRouter(finalRoutes);

export default authRouter;
