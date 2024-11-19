import { Card } from 'primereact/card';
import { useGetPokemonByNameQuery } from '../api';
import { Type } from '@/shared/ui/Type/Type';
import { PokemonSkeleton } from './Skeleton';

export const PokemonCard = ({ name }) => {
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(name);

    if (isLoading) return <PokemonSkeleton />;
    if (error) return <div>Error loading pokemon details</div>;

    const ImageCustom = ({ src, alt }) => {
        return <img className='w-full h-40 object-contain block' src={src} alt={alt} />;
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
        <>
            <Card
                header={
                    <ImageCustom src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                }
                title={<Title name={pokemon.name} />}
                subTitle={`#${pokemon.id}`}
                footer={<Types types={pokemon.types} />}
            />
        </>
    );
};
