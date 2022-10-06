const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) => {
  return `${name} está a ${value} ${measurementUnit} de distância do Sol.`
};

const getPlanet = (callback) => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  return callback(mars);
};

setTimeout(() => console.log(getPlanet(planetDistanceFromSun)), 4000); // Imprime Marte depois de 4 segundos