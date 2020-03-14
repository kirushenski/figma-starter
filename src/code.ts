import test from '@utils/test';

figma.showUI(__html__);

figma.ui.onmessage = ({ type, min, max }) => {
    if (type === 'test') {
        alert(`Random number: ${test(min, max)}`);
    } else {
        figma.closePlugin();
    }
};
