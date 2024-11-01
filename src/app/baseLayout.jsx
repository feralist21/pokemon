import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='py-6'>
                <div className='container mx-auto px-6 flex items-center justify-between'>
                    <a className='text-2xl font-semibold' href='/'>
                        Pokedex
                    </a>
                    <div>избранное</div>
                </div>
            </header>
            <main className='flex-grow'>
                <div className='container mx-auto px-6'>
                    <Outlet />
                </div>
            </main>
            <footer className='py-10'>
                <div className='container mx-auto px-6'>
                    <p>footer</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
