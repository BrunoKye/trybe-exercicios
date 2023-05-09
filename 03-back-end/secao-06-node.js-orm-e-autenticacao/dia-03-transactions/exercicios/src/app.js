const express = require('express');

const app = express();
app.use(express.json());

const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getPatientsAndSurgeriesNoDoctor,
  createPatient,
} = require('./controllers/patients.controller');
const { getAllPlans } = require('./controllers/plans.controller');
const { getDoctorSurgeries } = require('./controllers/surgeries.controller');

app.get('/patients/plans', getAllPatientsPlans);
app.get('/patients/surgeries', getAllPatientsSurgeries);
app.get('/patients/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);

app.post('/patients', createPatient);

app.get('/plans/:id', getAllPlans);

app.get('/surgeries/:name', getDoctorSurgeries);

module.exports = app;
