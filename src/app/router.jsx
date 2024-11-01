import { createBrowserRouter } from 'react-router-dom';
import { Favorite } from '@/pages/favorite';
import { HomePage } from '@/pages/home';
import Layout from './baseLayout';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'favorite',
                element: <Favorite />,
            },
        ],
    },
]);

export default appRouter;
