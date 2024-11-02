import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';
import { useGetPokemonByNameQuery } from '../api';

export const PokemonCard = ({ name }) => {
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading pokemon details</div>;

    const ImageCustom = ({ src, alt }) => {
        return <Image className='w-full h-32 object-contain' src={src} alt={alt} />;
    };

    // const Type = ({ type, label }) => {
    //     return <Tag value={label} rounded unstyled className='' />;
    // };

    const Title = ({ name }) => {
        return <h2 className='text-xl font-medium text-black'>{name}</h2>;
    };

    return (
        <Card
            header={<ImageCustom src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />}
            title={<Title name={pokemon.name} />}
            subTitle={`#${pokemon.id}`}
            // footer={<Type type={'info'} label={pokemon.name} />}
        />
    );
};
