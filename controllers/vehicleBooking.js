const {BookingService}=require('../config/model')

const createBookingService = async (req, res) => {
    try {
        const { userId, vehicleId, vehicleTypeId, modelId, startTime, endTime } = req.body;
        const newBooking = await BookingService.create({
            userId: userId,
            vehicleId: vehicleId,
            vehicleTypeId: vehicleTypeId,
            modelId: modelId,
            startTime: startTime,
            endTime: endTime
        });
        res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
      }
      catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'Failed to create booking' });
      }
}

module.exports={createBookingService}