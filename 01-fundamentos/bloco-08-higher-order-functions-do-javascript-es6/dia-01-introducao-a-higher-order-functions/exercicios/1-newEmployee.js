const registerEmployee = (name) => {
    // regex - https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
    const newName = name.toLowerCase().replace(/ /g, '_');
    const email = `${name} | Email: ${newName}@trybe.com`;

    return email;
}

const newEmployee = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva')
    }

    return employees;
};

console.log(newEmployee(registerEmployee));
