const express = require('express');
const router = express.Router();
const {createVehicle,getAllVehicle} = require('../controllers/vehicle');

router.get('/vehicle', getAllVehicle);
router.post('/vehicle', createVehicle);

module.exports = router
