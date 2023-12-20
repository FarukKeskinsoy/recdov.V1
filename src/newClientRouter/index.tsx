import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import { newClientRoutes } from './newClientRoutes';
import AuthLayout from '../components/Layouts/AuthLayout';

const finalRoutes = newClientRoutes.map((route) => {
    return {
        ...route,
        element: <AuthLayout>{route.element}</AuthLayout>,
    };
});

const newClientRouter = createBrowserRouter(finalRoutes);

export default newClientRouter;
