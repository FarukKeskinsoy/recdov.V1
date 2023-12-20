import { lazy } from 'react';
import RecoverIdCover from '../pages/Authentication/RecoverIdCover';
import UnlockCover from '../pages/Authentication/UnlockCover';

const Error = lazy(() => import('../components/Error'));


const unlockRoutes = [
    // dashboard
    {
        path: '/',
        element: <UnlockCover />,
        layout: 'blank',
        
    },
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    }
];

export { unlockRoutes};
