import api from '@/shared/api';

const pokemonApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => ({
                url: `pokemon/${name}`,
            }),
        }),
        getPokemonList: builder.query({
            query: (params) => ({
                url: 'pokemon',
                params,
            }),
        }),
    }),
});

export const { useGetPokemonByNameQuery, useLazyGetPokemonListQuery } = pokemonApi;
