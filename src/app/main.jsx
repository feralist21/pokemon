import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Favorite } from '@/pages/favorite';
import { HomePage } from '@/pages/home';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PrimeReactProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/favorite' element={<Favorite />} />
                </Routes>
            </Router>
        </PrimeReactProvider>
    </StrictMode>,
);
