const fs = require('fs').promises;
const path = require('path');

const readData = (...userID) => {
  const findCharacter = new Promise(async (resolve, reject) => {
    if (userID <= 0 || userID > 10) {
      reject(new Error("ID inválido."));
    }

    const rawData = await fs.readFile(path.resolve(__dirname, '../../data/simpsons.json'));
    const data = JSON.parse(rawData);

    resolve(data);
  })

  return findCharacter;
}

module.exports = readData;