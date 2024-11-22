import { useState, useEffect, useCallback } from 'react';
import { PokemonCard, useLazyGetPokemonListQuery } from '@/entities/pokemonCard';
import { Paginator } from 'primereact/paginator';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
const INITIAL_PER_PAGE = 12;
const PER_PAGE_OPTIONS = [12, 16, 30];

const PokemonList = () => {
    const [getPokemonList, { error, isLoading }] = useLazyGetPokemonListQuery();
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(INITIAL_PER_PAGE);
    const [totalCount, setTotalCount] = useState(0);

    const fetchPokemons = useCallback(
        async (offset, limit) => {
            const response = await getPokemonList({ limit, offset });
            setPokemons(response.data.results);
            setTotalCount(response.data.count);
        },
        [getPokemonList],
    );

    useEffect(() => {
        fetchPokemons(offset, limit);
    }, [fetchPokemons, offset, limit]);

    const onPageChange = (event) => {
        setOffset(event.first);
        setLimit(event.rows);
    };

    if (isLoading)
        return (
            <div className='flex items-center justify-center h-full'>
                <ProgressSpinner />
            </div>
        );
    if (error)
        return (
            <div>
                <Message severity='error' text='Ошибка загрузки!' />
            </div>
        );

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='grid grid-cols-6 gap-5'>
                {pokemons.map((pokemon) => (
                    <PokemonCard name={pokemon.name} key={pokemon.name} />
                ))}
            </div>
            <Paginator
                first={offset}
                rows={limit}
                totalRecords={totalCount}
                rowsPerPageOptions={PER_PAGE_OPTIONS}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export { PokemonList };
