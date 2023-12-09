const {Vehicle,VehicleType,VehicleTypeModel} = require('../config/model')

const createVehicle = async (req, res) => {
  try {
    const { vehicleId, wheelNumber, vehicleName,userId } = req.body;
    const vehicle = await Vehicle.create({ 
      vehicleId: vehicleId,
      wheelNumber: wheelNumber,
      vehicleName: vehicleName,
      userId:userId
    });
    res.status(201).json(vehicle);
  } catch (error) {
    console.error('Error creating vehicle type:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getAllVehicle = async(req,res)=>{
    try {
        const vehicles = await Vehicle.findAll(
          {
            attributes:['vehicleId','wheelNumber'],
            include: [
              {
                model: VehicleType, 
                attributes: ['vehicleTypeId','vehicleTypeName'],
                include: [
                  {
                    model: VehicleTypeModel,
                    attributes: ['modelId', 'model'],
                  },
                ],
              },
            ],
          },
        );
        res.json(vehicles);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports={
    createVehicle,
    getAllVehicle
}