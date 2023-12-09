const express = require('express');
const router = express.Router();
const {createBookingService} = require('../controllers/vehicleBooking');

router.post('/booking', createBookingService);

module.exports = router
