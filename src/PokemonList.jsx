import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Paginator } from 'primereact/paginator';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pokemonsPerPage = 20;

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
            const pokemonsWithDetails = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    const details = await axios.get(pokemon.url);
                    return { ...pokemon, details: details.data };
                }),
            );
            setPokemons(pokemonsWithDetails);
            setFilteredPokemons(pokemonsWithDetails);
            setTotalPages(Math.ceil(pokemonsWithDetails.length / pokemonsPerPage));
        };

        fetchPokemons();
    }, []);

    useEffect(() => {
        const filtered = pokemons.filter(
            (pokemon) =>
                pokemon.name.includes(searchTerm.toLowerCase()) &&
                (selectedType ? pokemon.details.types.some((type) => type.type.name === selectedType) : true),
        );
        setFilteredPokemons(filtered);
        setTotalPages(Math.ceil(filtered.length / pokemonsPerPage));
        setCurrentPage(1);
    }, [searchTerm, selectedType, pokemons]);

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const onPageChange = (event) => {
        setCurrentPage(event.page + 1);
    };

    const types = [
        'normal',
        'fire',
        'water',
        'grass',
        'electric',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dragon',
        'dark',
        'steel',
        'fairy',
    ];

    return (
        <div className='pokemon-list'>
            <div className='grid justify-center align-center'>
                <div className='col-12 md-6'>
                    <span className='input-icon-left'>
                        <i className='pi pi-search' />
                        <InputText
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder='Search by name...'
                        />
                    </span>
                </div>
                <div className='col-12 md-6'>
                    <Dropdown
                        value={selectedType}
                        options={types.map((type) => ({ label: type, value: type }))}
                        onChange={(e) => setSelectedType(e.value)}
                        placeholder='Select a type'
                    />
                </div>
            </div>
            <div className='grid'>
                {currentPokemons.map((pokemon) => (
                    <div key={pokemon.name} className='col-3 md-4'>
                        <Card
                            title={pokemon.name}
                            subTitle={pokemon.details.types.map((type) => type.type.name).join(', ')}
                        >
                            <img src={pokemon.details.sprites.front_default} alt={pokemon.name} />
                        </Card>
                    </div>
                ))}
            </div>
            <Paginator
                first={indexOfFirstPokemon}
                rows={pokemonsPerPage}
                totalRecords={filteredPokemons.length}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default PokemonList;
