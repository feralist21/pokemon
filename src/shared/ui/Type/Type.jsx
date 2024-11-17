import clsx from 'clsx';
import { useMemo } from 'react';

const Type = ({ typeName }) => {
    const classesType = useMemo(() => {
        switch (typeName) {
            case 'normal':
                return 'bg-gray-400 text-black';
            case 'fighting':
                return 'bg-amber-700 text-white';
            case 'flying':
                return 'bg-sky-500 text-white';
            case 'poison':
                return 'bg-purple-400 text-white';
            case 'ground':
                return 'bg-yellow-800/70 text-white';
            case 'rock':
                return 'bg-yellow-800 text-white';
            case 'bug':
                return 'bg-lime-700 text-white';
            case 'ghost':
                return 'bg-purple-800 text-white';
            case 'steel':
                return 'bg-zinc-500 text-white';
            case 'fire':
                return 'bg-orange-500 text-white';
            case 'water':
                return 'bg-blue-600 text-white';
            case 'grass':
                return 'bg-green-500 text-black';
            case 'electric':
                return 'bg-amber-300 text-white';
            case 'psychic':
                return 'bg-pink-500 text-white';
            case 'ice':
                return 'bg-cyan-300 text-black';
            case 'dragon':
                return 'bg-red-700 text-white';
            case 'dark':
                return 'bg-stone-900/80 text-white';
            case 'fairy':
                return 'bg-pink-300 text-white';
            case 'stellar':
                return 'bg-Emerald-900 text-white';
            case 'unknown':
                return 'bg-stone-950 text-white';
            default:
                return 'primary';
        }
    }, [typeName]);

    return <div className={clsx(classesType, 'rounded-md py-1 px-2 text-xs leading-3 font-normal w-max')}>{typeName}</div>;
};

export { Type };
