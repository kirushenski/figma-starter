import * as React from 'react';

const Hello = () => {
    const onClick = () => {
        parent.postMessage({ pluginMessage: 'hello' }, '*');
    };

    const sum = (a: number, b: number): number => a + b;

    console.log(sum('a', 1));

    return (
        <button type="button" onClick={onClick}>
            Click me
        </button>
    );
};

export default Hello;
