import React from 'react';

interface IHello extends React.ComponentProps<'button'> {
    name?: string;
}

const Hello: React.FC<IHello> = ({ type = 'button', name, ...props }) => {
    const onClick = () => {
        parent.postMessage({ pluginMessage: 'hello' }, '*');
    };

    return (
        <button type={type} onClick={onClick} {...props}>
            Click me {name}
        </button>
    );
};

export default Hello;
