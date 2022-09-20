const techList = (tech, nome) => {
    if (tech.length === 0) return 'Vazio!';

    const newOrder = tech.sort();
    const newArray = [];

    for (let i = 0; i < tech.length; i += 1) {
        newArray.push({
            tech: newOrder[i],
            name: nome
        });
    }

    return newArray;
}

module.exports = techList;
