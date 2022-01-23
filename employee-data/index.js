const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

//create express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/employee-data",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("connect to DB"))
.catch(console.error);

//import routes
const employeeRoutes = require('./routes/employee');

// app.use('/api',employeeRoutes);

initRoutes=(app) => {
    app.use("/api",employeeRoutes);

};
initRoutes(app);

app.listen(3000,()=>console.log("server is running on port 3000"))