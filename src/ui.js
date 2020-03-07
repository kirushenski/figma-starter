import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from '@components/Hello';
import LogoIcon from '@icons/logo.svg';
const App = () => {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Figma Starter"),
        React.createElement(LogoIcon, null),
        React.createElement(Hello, null)));
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
