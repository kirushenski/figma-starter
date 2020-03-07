figma.showUI(__html__);

figma.ui.onmessage = msg => {
    console.log(msg);

  figma.closePlugin('Vadyan');
};
