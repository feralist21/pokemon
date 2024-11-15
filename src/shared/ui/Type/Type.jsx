import { useMemo } from 'react';

const Type = ({ typeName }) => {
    const classesType = useMemo(() => {
        switch (typeName) {
            case 'normal':
                return 'red';
            case 'fighting':
                return 'red';
            case 'flying':
                return 'red';
            case 'poison':
                return 'red';
            case 'ground':
                return 'red';
            case 'rock':
                return 'red';
            case 'bug':
                return 'red';
            case 'ghost':
                return 'red';
            case 'steel':
                return 'red';
            case 'fire':
                return 'red';
            case 'water':
                return 'red';
            case 'grass':
                return 'red';
            case 'electric':
                return 'red';
            case 'psychic':
                return 'red';
            case 'ice':
                return 'red';
            case 'dragon':
                return 'red';
            case 'dark':
                return 'red';
            case 'fairy':
                return 'red';
            case 'stellar':
                return 'red';
            case 'unknown':
                return 'red';
            default:
                return 'primary';
        }
    }, [typeName]);

    return <div className='rounded-md bg-slate-500 text-white py-1 px-2 text-xs font-normal w-max'>{typeName}</div>;
};

export { Type };
