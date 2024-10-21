import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { HomePage } from '@/pages/homePage';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PrimeReactProvider>
            <HomePage />
        </PrimeReactProvider>
    </StrictMode>,
);
