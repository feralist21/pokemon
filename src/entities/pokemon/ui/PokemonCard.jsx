import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';
import { useGetPokemonByNameQuery } from '../api';

export const PokemonCard = ({ name }) => {
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading pokemon details</div>;

    const getImage = (src, alt) => {
        return <Image src={src} alt={alt} />;
    };

    const getType = (bgColor, label) => {
        return <Tag severity={bgColor} value={label} />;
    };

    return (
        <Card
            header={getImage(pokemon.sprites.front_default, pokemon.name)}
            title={pokemon.name}
            subTitle={`#${pokemon.id}`}
            footer={getType('info', pokemon.name)}
        />
    );
};
