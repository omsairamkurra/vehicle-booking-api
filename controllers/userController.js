const {User,Vehicle,VehicleType,VehicleTypeModel}=require('../config/model');


const getAllUsers= async (req, res)=> {
    try {
        const users = await User.findAll({
          attributes:['id','firstName','lastName'],
          include: [{
            model: Vehicle,
            attributes: ['vehicleId','wheelNumber'],
            include: [
              {
                model: VehicleType, 
                attributes: ['vehicleTypeId','vehicleTypeName'],
                include: [
                  {
                    model: VehicleTypeModel,
                    attributes: ['modelId','model'],
                  },
                ],
              },
            ],
          }
          ]
        });
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
};
    
// const getUserById=async (req, res) =>{
//         try {
//             const { id } = req.params;
//             const user = await User.findByPk(id);
//             if (!user) {
//               return res.status(404).json({ error: 'User not found' });
//             }
//             res.json(user);
//           } catch (error) {
//             res.status(500).json({ error: 'Internal server error' });
//           }
// };
    
const createUser=async (req, res)=> {
        try {
          const { firstName, lastName } = req.body;
          const newUser = await User.create({ firstName, lastName });
          res.status(201).json(newUser);
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
};

module.exports={
    getAllUsers,
    createUser
}