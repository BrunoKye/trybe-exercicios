const fs = require('fs').promises;
const path = require('path');

allData = async () => {
  const rawData = await fs.readFile(path.resolve(__dirname, '../data/simpsons.json'));
  const data = JSON.parse(rawData);
  const modifyData = data.map(({ id, name }) => `${id} - ${name}`);

  return modifyData.forEach((data) => console.log(data));
}

allData();
