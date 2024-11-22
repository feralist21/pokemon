import { Link } from 'react-router-dom';

const LayoutHeader = () => {
    return (
        <header className='py-6'>
            <div className='container mx-auto px-6 flex items-center justify-between'>
                <Link to='/' className='text-2xl font-semibold'>
                    Pokedex
                </Link>
                <Link to='favorite'>избранное</Link>
            </div>
        </header>
    );
};

export { LayoutHeader };
