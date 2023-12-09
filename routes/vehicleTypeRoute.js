const express = require('express');
const router = express.Router();
const {createVehicleType,
    getAllVehicleTypes} = require('../controllers/vehicleType');

router.get('/vehicleType', getAllVehicleTypes);
router.post('/vehicleType', createVehicleType);

module.exports = router
