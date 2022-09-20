const hydrate = (string) => {
    const splitString = string.split('');
    let drinks = 0;
    let result;

    // https://github.com/aysllanferreira/trybe-exercicios/pull/10/files#diff-986a9db26001fddcd11a32f9d3fb9c5fc2e96d39ba0c0199dac2a14a95ac1748
    splitString.forEach(element => {
        isNaN(Number(element)) ? null : (drinks += Number(element));
    });

    drinks === 1 ? result = `${drinks} copo de água` : result = `${drinks} copos de água`

    return result;
}

module.exports = hydrate;
