import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';
import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);

    const getImage = (src, alt) => {
        return <Image src={src} alt={alt} />;
    };

    const getType = (bgColor, label) => {
        return <Tag severity={bgColor} value={label} />;
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <header className='py-6'>
                <div className='container mx-auto px-6 flex items-center justify-between'>
                    <a className='text-2xl font-semibold' href='/'>
                        Pokedex
                    </a>
                    <div>избранное</div>
                </div>
            </header>
            <main className='flex-grow'>
                <div className='container mx-auto px-6'>
                    <Card
                        header={getImage('https://placehold.co/100x100/png', 'ditto')}
                        title='Ditto'
                        subTitle='#001'
                        footer={getType('info', 'poison')}
                    />
                </div>
            </main>
            <footer className='py-10'>
                <div className='container mx-auto px-6'>
                    <p>footer</p>
                </div>
            </footer>
        </div>
    );
};

export { HomePage };
