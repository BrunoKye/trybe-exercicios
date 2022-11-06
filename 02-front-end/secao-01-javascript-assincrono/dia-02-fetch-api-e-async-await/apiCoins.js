const newCoinList = ({ name, symbol, priceUsd }) => {
    const coinsList = document.getElementById('coins-list');
    const price = Number(priceUsd).toFixed(2);
    const newCoin = document.createElement('li');
    
    newCoin.innerText = `${name} (${symbol}): ${price}`;
    coinsList.append(newCoin);
};

const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    let result = await fetch(url)
        .then((response) => response.json());

    result = result.data.slice(0, 10);
    result.forEach((coin) => newCoinList(coin));
};

fetchCoins();