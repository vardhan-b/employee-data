const express = require('express');
// const { findByIdAndUpdate } = require('../models/Employee');
const router = express.Router();
const EmployeeModel = require('../models/Employee');
const {
    addEmployeeSchema,
    editEmployeeSchema } = require('../validators/employee');

//create employee
router.post('/employee',async (req,res)=>{
try{
    const payload= req.body;
    const {value: employeeEntry , error}=addEmployeeSchema.validate(payload);
    if(error){
        throw error;
    }
    const employee = new EmployeeModel(employeeEntry);
    const savedEmployee = await employee.save();
    res.json(savedEmployee)
}
catch(error)
{
    res.json(error)
}
});

//update employee
router.put('/employee/:id',async(req,res)=>{
    try{
    const id = req.params.id;
    
    const payload = req.body;
    const {value:employeeEntry, error}= editEmployeeSchema.validate(payload);
    if(error){
        throw error;
    }
    const options={new:true};
    const updatedEmployee=await EmployeeModel.findByIdAndUpdate(id,employeeEntry,options);
    res.json(updatedEmployee);
} catch (error) {
  res.json(error);
}
});

router.get('/employees/count',async (req,res)=>{

    try {
        const employees= req.params.employees;
             const employee = await EmployeeModel.find().count();
             res.json(employee);
             
             res.json("no matching found")
           
 } catch (error) {
     res.json(error)
 }
});
router.get('/employees/:firstName',async (req,res)=>{
   
    try {
        let filter = {
            firstName:req.query.firstName?req.query.firstName:undefined,
            lastName:req.query.lastName?req.query.lastName:undefined,
            department: req.query.department?req.query.department:undefined,
            email:req.query.email?req.query.email:undefined,
            gender:req.query.gender?req.query.gender:undefined,
            designatipon:req.query.designation?req.query.designation:undefined,
            reportingManager:req.query.reportingManager?req.query.reportingManager:undefined,
            location:req.query.location?req.query.location:undefined
        }
        console.log(filter);
       const data = Object.keys(filter).forEach(key => filter[key] === undefined? delete filter[key]:{});
       const employeeList = await EmployeeModel.find(data);
       res.json({employees:employeeList});
          
} catch (error) {
    res.json(error)
}

});





router.put('/employee/:id/:action',async (req,res)=>{
    const id = req.params.id;
    const action = req.params.action;
    if(action == 'deactive'){
        const Employee = await EmployeeModel.findByIdAndUpdate(id,{deleteAt:Date.now()});
        res.json(Employee);
    }
    else{
        const Employee = await EmployeeModel.findByIdAndUpdate(id,{deleteAt:null});
        res.json(Employee);
    }


});

module.exports= router;