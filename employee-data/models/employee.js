const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  dateOfJoining:{
      type:Date,
      required:true
  },
  reportingManager:{
    type:String,
    required: true
},
salary:{
    type:Number,
    required: true
},
employeeCode:{
    type:Number,
    required: true
},
location:{
    type:String,
    required: true
},
state:{
    type:String,
    required: true
},
country:{
    type:String,
    required: true
},
department:{
    type:String,
    required: true
},

deletedAt:{
    type:Date,
     required: true
}

});

module.exports= mongoose.model('Employee',EmployeeSchema);