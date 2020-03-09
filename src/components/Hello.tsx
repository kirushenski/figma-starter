import React from 'react';

interface IHello {
    name?: string;
}

const Hello: React.FC<IHello> = ({ name }) => {
    const onClick = () => {
        parent.postMessage({ pluginMessage: 'hello' }, '*');
    };

    return (
        <button type="button" onClick={onClick}>
            Click me {name}
        </button>
    );
};

export default Hello;
