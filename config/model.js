const {DataTypes}=require('sequelize')
const {sequelize}= require('./database')

const User=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       allowNull:false
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

const Vehicle = sequelize.define('vehicle',{
    vehicleId:{
        type:DataTypes.INTEGER,
        primaryKey: true,
       allowNull:false
    },
    wheelNumber:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    vehicleName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
   
})
const VehicleType = sequelize.define('vehicleType',{
    vehicleTypeId:{
        type:DataTypes.INTEGER,
        primaryKey: true,
       allowNull:false
    },
    vehicleTypeName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    vehicleVehicleId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
   
})


const VehicleTypeModel = sequelize.define('vehicleTypeModel',{
    modelId:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false
    },
    model:{
        type:DataTypes.STRING,
        allowNull:false
    },
    vehicleTypeVehicleTypeId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

const BookingService=sequelize.define('BookingService',{
    userId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      vehicleId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      vehicleTypeId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      modelId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
})


User.hasMany(Vehicle);
Vehicle.belongsTo(User)

Vehicle.hasMany(VehicleType);
VehicleType.belongsTo(Vehicle)

VehicleType.hasMany(VehicleTypeModel);
VehicleTypeModel.belongsTo(VehicleType); 

module.exports={User,Vehicle,VehicleType,VehicleTypeModel,BookingService}