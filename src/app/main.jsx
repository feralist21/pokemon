import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { Favorite } from '@/pages/favorite';
import { HomePage } from '@/pages/home';
import './index.css';

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
