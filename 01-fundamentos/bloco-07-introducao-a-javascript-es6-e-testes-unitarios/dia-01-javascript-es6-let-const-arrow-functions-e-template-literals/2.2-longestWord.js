const longestWord = phrase => {
    let findWord = phrase.split(' ').sort((a, b) => b.length - a.length);
    
    return findWord[0];
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu.'));
