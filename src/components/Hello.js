import * as React from 'react';
const Hello = () => {
    const onClick = () => {
        parent.postMessage({ pluginMessage: 'hello' }, '*');
    };
    const sum = (a, b) => a + b;
    console.log(sum('a', 1));
    return (React.createElement("button", { type: "button", onClick: onClick }, "Click me"));
};
export default Hello;
