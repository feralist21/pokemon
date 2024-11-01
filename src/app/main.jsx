import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { Favorite } from '@/pages/favorite';
import { HomePage } from '@/pages/home';
import { store } from '@/shared/store';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PrimeReactProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/favorite' element={<Favorite />} />
                    </Routes>
                </Router>
            </PrimeReactProvider>
        </Provider>
    </StrictMode>,
);
