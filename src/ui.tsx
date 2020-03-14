import React from 'react';
import '@emotion/core';
import ReactDOM from 'react-dom';
import Test from '@components/Test';
import TestIcon from '@icons/test.svg';

const App = () => {
    return (
        <div css={{ fontFamily: 'Arial' }}>
            <h1 css={{ display: 'flex', alignItems: 'center' }}>
                <TestIcon title="test" css={{ marginRight: 16 }} /> Figma Starter
            </h1>
            <Test />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
