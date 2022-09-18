const btnClick = document.getElementById('btn-click');
const counter = document.getElementById('counter');
let clicks = 0;

const clickCount = () => {
    clicks += 1;
    counter.innerHTML = clicks;
}

btnClick.addEventListener('click', clickCount);
