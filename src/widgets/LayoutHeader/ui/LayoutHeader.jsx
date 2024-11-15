const LayoutHeader = () => {
    return (
        <header className='py-6'>
            <div className='container mx-auto px-6 flex items-center justify-between'>
                <a className='text-2xl font-semibold' href='/'>
                    Pokedex
                </a>
                <div>избранное</div>
            </div>
        </header>
    );
};

export { LayoutHeader };
