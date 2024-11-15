import { Outlet } from 'react-router-dom';

const Layout = ({ headerSlot, footerSlot }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            {headerSlot}
            <main className='flex-grow'>
                <div className='container mx-auto px-6'>
                    <Outlet />
                </div>
            </main>
            {footerSlot}
        </div>
    );
};

export default Layout;
