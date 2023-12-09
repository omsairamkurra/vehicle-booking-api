const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json())

const userRoute=require('./routes/userRoute')
const vehicleTypeRoute=require('./routes/vehicleTypeRoute')
const vehicleRoute=require('./routes/vehicle')
const vehicleModelRouter = require('./routes/vehicleModelRoute')
const vehicleBookingRoute = require('./routes/vehicleBookingRoute')

app.use(userRoute)
app.use(vehicleTypeRoute)
app.use(vehicleRoute)
app.use(vehicleModelRouter)
app.use(vehicleBookingRoute)



const port= 4000
app.listen(port,()=>{
    console.log("Server is running on port "+port);
})