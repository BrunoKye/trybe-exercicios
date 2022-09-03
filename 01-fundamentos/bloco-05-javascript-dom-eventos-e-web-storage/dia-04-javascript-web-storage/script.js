let btnBgcolor = document.getElementById('btn-bgcolor');
let btnColor = document.getElementById('btn-color');
let btnSize = document.getElementById('btn-size');
let btnLnheight = document.getElementById('btn-lnheight');
let btnFtfamily = document.getElementById('btn-ftfamily');
let btnLastsession = document.getElementById('btn-lastsession');

function changeBgColor() {
    let textBgColor = document.getElementById('input-bgcolor');
    let applyBgColor = document.querySelector('body');

    localStorage.setItem('bgcolor', textBgColor.value);
    textBgColor.value = '';

    applyBgColor.style.backgroundColor = localStorage.getItem('bgcolor');
}

btnBgcolor.addEventListener('click', changeBgColor);


function changeColor() {
    let textColor = document.getElementById('input-color');
    let applyColor = document.querySelector('#lorem-text');

    localStorage.setItem('color', textColor.value);
    textColor.value = '';

    applyColor.style.color = localStorage.getItem('color');
}

btnColor.addEventListener('click', changeColor);


function changeSize() {
    let textSize = document.getElementById('input-size');
    let applySize = document.querySelector('#lorem-text');

    localStorage.setItem('size', textSize.value);
    textSize.value = '';

    applySize.style.fontSize = localStorage.getItem('size');
}

btnSize.addEventListener('click', changeSize);


function changeLnheight() {
    let textLnheight = document.getElementById('input-lnheight');
    let applyLnheight = document.querySelector('#lorem-text');

    localStorage.setItem('lnheight', textLnheight.value);
    textLnheight.value = '';

    applyLnheight.style.lineHeight = localStorage.getItem('lnheight');
}

btnLnheight.addEventListener('click', changeLnheight);


function changeFtfamily() {
    let textFtfamily = document.getElementById('input-ftfamily');
    let applyFtfamily = document.querySelector('#lorem-text');

    localStorage.setItem('ftfamily', textFtfamily.value);
    textFtfamily.value = '';

    applyFtfamily.style.fontFamily = localStorage.getItem('ftfamily');
}

btnFtfamily.addEventListener('click', changeFtfamily);


function applyLastSession() {
    let applyBgColor = document.querySelector('body');
    let applyLastConfig = document.querySelector('#lorem-text');

    applyBgColor.style.backgroundColor = localStorage.getItem('bgcolor');
    applyLastConfig.style.color = localStorage.getItem('color');
    applyLastConfig.style.fontSize = localStorage.getItem('size');
    applyLastConfig.style.lineHeight = localStorage.getItem('lnheight');
    applyLastConfig.style.fontFamily = localStorage.getItem('ftfamily');
}

btnLastsession.addEventListener('click', applyLastSession);
