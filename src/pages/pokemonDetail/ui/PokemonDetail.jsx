const PokemonDetailPage = () => {
    return (
        <div className='flex gap-x-5'>
            <div className='w-2/6'>
                <div className="bg-gray-100 p-4 rounded-md">
                    <img
                        className="block w-full h-auto"
                        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                        alt='булбазавр'
                    />
                </div>
            </div>
            <div className='w-4/6'>
                <h1 className="text-4xl font-semibold text-black">Bulbasaur</h1>
                <h2>Type</h2>
                <div>тут будут плашки типов</div>
            </div>
        </div>
    );
};

export { PokemonDetailPage };
