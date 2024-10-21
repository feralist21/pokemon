const HomePage = () => {
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis amet recusandae eaque perferendis
                    tenetur? Ipsum porro eos tempore laboriosam fugiat nisi reprehenderit quibusdam officia,
                    exercitationem debitis! Commodi eos sit aspernatur?
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

export { HomePage };
