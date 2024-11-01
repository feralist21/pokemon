import { PokemonCard, useGetPokemonListQuery } from '@/entities/pokemon';

const HomePage = () => {
    const { data: pokemons, isLoading, error } = useGetPokemonListQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading pokemons</div>;

    return (
        <div className='grid grid-cols-10 gap-5'>
            {pokemons.results.map((pokemon) => (
                <PokemonCard name={pokemon.name} key={pokemon.name} />
            ))}
        </div>
    );
};

export { HomePage };
