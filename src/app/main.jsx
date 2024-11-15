import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { appStore } from './appStore';
import appRouter from './appRouter';
import '@/shared/base.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={appStore}>
            <PrimeReactProvider>
                <RouterProvider router={appRouter}/>
            </PrimeReactProvider>
        </Provider>
    </StrictMode>,
);
