import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tailwind css
import './tailwind.css';

// i18n (needs to be bundled)
import './i18n';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './router/index';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';
import { AuthProvider } from './context/authentication.context';
import ApplicationHolder from './pages/ApplicationHolder';
import { MukellefProvider } from './context/mukellef.context';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense>
            <AuthProvider>
                <MukellefProvider>
                    <Provider store={store}>
                            <ApplicationHolder/>
                    </Provider>
                </MukellefProvider>
            </AuthProvider>
        </Suspense>
    </React.StrictMode>
);

