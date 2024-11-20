import { Skeleton } from 'primereact/skeleton';

const PokemonSkeleton = () => {
    return (
        <div className='flex flex-col'>
            <Skeleton height='10rem' className='mb-6' />
            <Skeleton className='mb-4' />
            <Skeleton className='mb-8' />
            <div className='flex gap-x-1'>
                <Skeleton width='2rem' />
                <Skeleton width='2rem' />
            </div>
        </div>
    );
};

export { PokemonSkeleton };
