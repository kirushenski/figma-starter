figma.showUI(__html__);

figma.ui.onmessage = ({ type }) => {
    if (type === 'hello') {
        alert('Hello, world!');
    }
    console.log(figma.currentPage.children[0].height);

    figma.closePlugin();
};
