import { lazy } from 'react';
import IndexAuth from '../pages/IndexAuth';
import NonConfirmedPage from '../pages/Authentication/NonConfirmedPage';
const LoginCover = lazy(() => import('../pages/Authentication/LoginCover'));
const RegisterCover = lazy(() => import('../pages/Authentication/RegisterCover'));
const RecoverIdCover = lazy(() => import('../pages/Authentication/RecoverIdCover'));
const UnlockCover = lazy(() => import('../pages/Authentication/UnlockCover'));
const About = lazy(() => import('../pages/About'));
const Error = lazy(() => import('../components/Error'));


const newClientRoutes = [
    {
        path: '/',
        element: <NonConfirmedPage />,
        
    },
    
];

export { newClientRoutes};
