const WAITING_DRIVER = 1;

const listTravelsWithoutDriver = [{
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: WAITING_DRIVER,
  startingAddress: 'Start',
  endingAddress: 'End',
  requestDate: '2022-08-24T03:04:04.374Z',
}];

const driverList = [
  { id: 1, name: 'Liana Cisneiros' },
  { id: 2, name: 'Fábio Frazão' },
  { id: 3, name: 'Anastacia Bicalho' },
  { id: 4, name: 'Samara Granjeiro' },
  { id: 5, name: 'Levi Teixeira' },
];

const createdDriver = { id: 1, name: 'Gus' };

const createdDriverWithoutCars = {
  ...createdDriver,
  cars: [],
};

const createdDriverWithCars = {
  ...createdDriver,
  cars: [
    {
      color: 'Branco',
      id: 1,
      licensePlate: 'NCA-0956',
      model: 'Renault Sandero',
    },
    {
      color: 'Vermelho',
      id: 2,
      licensePlate: 'DZG-4376',
      model: 'Volkswagen Gol',
    },
  ],
};

module.exports = {
  listTravelsWithoutDriver,
  driverList,
  createdDriver,
  createdDriverWithCars,
  createdDriverWithoutCars,
};