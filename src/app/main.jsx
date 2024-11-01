import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { store } from './store';
import appRouter from './router';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PrimeReactProvider>
                <RouterProvider router={appRouter}/>
            </PrimeReactProvider>
        </Provider>
    </StrictMode>,
);
