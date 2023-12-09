const {VehicleType,VehicleTypeModel} = require('../config/model')

const createVehicleType = async (req, res) => {
  try {
    const { vehicleTypeId, vehicleTypeName,vehicleVehicleId } = req.body;
    const vehicleType = await VehicleType.create({ 
      vehicleVehicleId: vehicleVehicleId,
      vehicleTypeId: vehicleTypeId,
      vehicleTypeName: vehicleTypeName,
    });
    res.status(201).json(vehicleType);
  } catch (error) {
    console.error('Error creating vehicle type:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getAllVehicleTypes = async(req,res)=>{
    try {
        const vehicleTypes = await VehicleType.findAll({
          attributes:['vehicleTypeId','vehicleTypeName'],
          include: [
            {
              model: VehicleTypeModel, // Include the correct model
              attributes: ['modelId', 'model'], // Select desired attributes
            },
          ],
        });
        res.json(vehicleTypes);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

// const getVehicleTypeById=async (req, res) =>{
//     try {
//         const {id } = req.params;
//         const vehicleTypeById = await VehicleType.findByPk(id);
//         if (!vehicleTypeById) {
//           return res.status(404).json({ error: 'vehicle not found' });
//         }
//         res.json(vehicleTypeById);
//       } catch (error) {
//         res.status(500).json({ error: 'Internal server error' });
//       }
// };

module.exports={
    createVehicleType,
    getAllVehicleTypes
}