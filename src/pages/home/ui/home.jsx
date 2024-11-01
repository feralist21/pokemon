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
        <Card
            header={getImage('https://placehold.co/100x100/png', 'ditto')}
            title='Ditto'
            subTitle='#001'
            footer={getType('info', 'poison')}
        />
    );
};

export { HomePage };
