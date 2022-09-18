const replaceX = name => {
    const phrase = 'Tryber x aqui!'
    const result = phrase.replace('x', name);

    return result
}

const showSkills = getResult => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let result = `${getResult}
    
    Minhas três principais habilidades são:
    - ${skills[0]}
    - ${skills[1]}
    - ${skills[2]}`

    return result;
}

console.log(showSkills(replaceX('Bruno')));
