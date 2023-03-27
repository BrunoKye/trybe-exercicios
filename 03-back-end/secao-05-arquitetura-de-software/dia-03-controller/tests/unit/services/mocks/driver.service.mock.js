const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;

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

const correctReturnTravel = ({
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: DRIVER_ON_THE_WAY,
  startingAddress: 'Start',
  endingAddress: 'End',
  requestDate: '2022-08-24T03:04:04.374Z',
});

const busyDriver = ({
  id: 1,
  passengerId: 1,
  driverId: 1,
  travelStatusId: DRIVER_ON_THE_WAY,
  startingAddress: 'Start',
  endingAddress: 'End',
  requestDate: '2022-08-24T03:04:04.374Z',
});

const correctReturnDriver = ({
  id: 1,
  name: 'drivers name',
  carId: 1,
});

module.exports = {
  listTravelsWithoutDriver,
  driverList,
  createdDriver,
  createdDriverWithCars,
  createdDriverWithoutCars,
  correctReturnTravel,
  busyDriver,
  correctReturnDriver,
};