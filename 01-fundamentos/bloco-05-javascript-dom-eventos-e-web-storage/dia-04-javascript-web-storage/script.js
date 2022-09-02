let btnBgcolor = document.getElementById('btn-bgcolor');
let btnColor = document.getElementById('btn-color');
let btnSize = document.getElementById('btn-size');
let btnLnheight = document.getElementById('btn-lnheight');
let btnFtfamily = document.getElementById('btn-ftfamily');

function changeBgColor() {
    let textBgColor = document.getElementById('input-bgcolor');
    let bgColor = document.querySelector('body');

    localStorage.setItem('bgcolor', textBgColor.value);
    textBgColor.value = '';

    bgColor.style.backgroundColor = localStorage.getItem('bgcolor');
}

btnBgcolor.addEventListener('click', changeBgColor);


function changeColor() {
    let textColor = document.getElementById('input-color');
    let color = document.querySelector('#lorem-text');

    localStorage.setItem('color', textColor.value);
    textColor.value = '';

    color.style.color = localStorage.getItem('color');
}

btnColor.addEventListener('click', changeColor);