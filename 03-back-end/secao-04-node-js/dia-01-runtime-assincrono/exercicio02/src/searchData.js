const readline = require('readline-sync');
const readData = require('./components/readData');

const searchData = async () => {
  const userID = readline.questionInt('Digite um ID entre 1 e 10: ');
  const data = await readData(userID);
  const result = data.find(({ id }) => Number(id) === userID);

  console.log(result);
}

searchData();