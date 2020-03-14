import React, { useState } from 'react';

const Test = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

    const onRandomizeClick = () => {
        parent.postMessage({ pluginMessage: { type: 'test', min, max } }, '*');
    };

    const onExitClick = () => {
        parent.postMessage({ pluginMessage: { type: 'exit' } }, '*');
    };

    return (
        <div>
            <div css={{ display: 'flex', marginBottom: 16 }}>
                <div>
                    Min:
                    <input type="number" value={min} onChange={({ target }) => setMin(Number(target.value))} />
                </div>
                <div>
                    Max:
                    <input type="number" value={max} onChange={({ target }) => setMax(Number(target.value))} />
                </div>
            </div>
            <div>
                <button type="button" onClick={onRandomizeClick} css={{ marginRight: 8 }}>
                    Randomize number
                </button>
                <button type="button" onClick={onExitClick}>
                    Exit
                </button>
            </div>
        </div>
    );
};

export default Test;
