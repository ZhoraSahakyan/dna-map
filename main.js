const svg = document.getElementsByTagName('svg')[0];

function centerSvg() {
    const cW = document.body.clientWidth;
    const cH = document.body.clientHeight;
    const scaleX = cW / 2000;
    const scaleY = cH / 857;
    console.log(document.body.clientWidth);
    console.log(document.body.clientHeight);
    // svg.style.transform = `scaleX(${scaleX}) scaleY(${scaleY}) translate(-${(2000 - cW)}px, 0px)`;
    svg.style.transform = `scale(${scaleX.toFixed(2)}) translate(${(cW - 2000) / 2}px, ${cH - 857}px)`;
    console.log(svg.style);
}

centerSvg()