figma.showUI(__html__);

figma.ui.onmessage = ({ type }) => {
    if (type === 'hello') {
        alert('Hello, world!');
    }

    figma.closePlugin();
};
