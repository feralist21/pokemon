import { createBrowserRouter } from 'react-router-dom';
import { Favorite } from '@/pages/favorite';
import { HomePage } from '@/pages/home';

const appRouter = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/favorite',
            element: <Favorite />,
        },
    ]);
};

export default appRouter;
