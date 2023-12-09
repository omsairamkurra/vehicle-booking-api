const {VehicleTypeModel} = require('../config/model')

const createVehicleModel = async (req, res) => {
  try {
    const { model, modelId,vehicleTypeVehicleTypeId } = req.body;
    const vehicleModel = await VehicleTypeModel.create({ 
        modelId: modelId,
      model: model,
      vehicleTypeVehicleTypeId: vehicleTypeVehicleTypeId
    });
    res.status(201).json(vehicleModel);
  } catch (error) {
    console.error('Error creating vehicle type:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getAllVehicleModels = async(req,res)=>{
    try {
        const vehicleModel = await VehicleTypeModel.findAll();
        res.json(vehicleModel);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

// const getVehicleModelById=async (req, res) =>{
//     try {
//         const {id } = req.params;
//         const vehicleModelById = await VehicleTypeModel.findByPk(id);
//         if (!vehicleModelById) {
//           return res.status(404).json({ error: 'vehicle model not found' });
//         }
//         res.json(vehicleModelById);
//       } catch (error) {
//         res.status(500).json({ error: 'Internal server error' });
//       }
// };

module.exports={
    createVehicleModel,
    getAllVehicleModels
}