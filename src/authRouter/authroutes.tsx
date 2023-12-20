import { lazy } from 'react';
import IndexAuth from '../pages/IndexAuth';
import NonConfirmedPage from '../pages/Authentication/NonConfirmedPage';
import LoginCover from '../pages/Authentication/LoginCover';
import RegisterCover from '../pages/Authentication/RegisterCover';
import UnlockCover from '../pages/Authentication/UnlockCover';
import RecoverIdCover from '../pages/Authentication/RecoverIdCover';

const Error = lazy(() => import('../components/Error'));


const authroutes = [
    // dashboard
    {
        path: '/',
        element: <LoginCover />,
        
    },
    // finance page
    //Authentication
    {
        path: '/auth/kayit-ol',
        element: <RegisterCover />,
        layout: 'blank',
    },
    {
        path: '/auth/kilit-ac',
        element: <UnlockCover />,
        layout: 'blank',
    },
    {
        path: '/auth/sifremi-unuttum',
        element: <RecoverIdCover />,
        layout: 'blank',
    },
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];

export { authroutes};
