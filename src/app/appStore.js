import { configureStore } from '@reduxjs/toolkit';
import api from '@/shared/api';

const appStore = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export { appStore };
