import { createBrowserRouter } from 'react-router-dom';
import { Favorite } from '@/pages/favorite';
import { HomePage } from '@/pages/home';
import { PokemonDetailPage } from '@/pages/pokemonDetail';
import { AppLayout } from './AppLayout';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'favorite',
                element: <Favorite />,
            },
            {
                path: '/:pokemonId',
                element: <PokemonDetailPage />,
            },
        ],
    },
]);

export default appRouter;
