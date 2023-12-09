const express = require('express');
const router = express.Router();
const {createVehicleModel,
    getAllVehicleModels} = require('../controllers/vehicleModel');

router.get('/vehicleModel', getAllVehicleModels);
router.post('/vehicleModel', createVehicleModel);

module.exports = router
