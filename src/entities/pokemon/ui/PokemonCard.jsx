import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { useGetPokemonByNameQuery } from '../api';
import { Type } from '@/shared/ui/Type/Type';

export const PokemonCard = ({ name }) => {
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading pokemon details</div>;

    const ImageCustom = ({ src, alt }) => {
        return <Image className='w-full h-32 object-contain' src={src} alt={alt} />;
    };

    const Title = ({ name }) => {
        return <h2 className='text-xl font-medium text-black'>{name}</h2>;
    };

    const Types = ({ types }) => {
        return (
            <div className='flex gap-x-1'>
                {types.map((type) => (
                    <Type key={type.slot} typeName={type.type.name} />
                ))}
            </div>
        );
    };

    return (
        <Card
            header={<ImageCustom src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />}
            title={<Title name={pokemon.name} />}
            subTitle={`#${pokemon.id}`}
            footer={<Types types={pokemon.types} />}
        />
    );
};
