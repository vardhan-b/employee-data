const Joi = require('joi');



const addEmployeeSchema = Joi.object({
    firstName: Joi.string().alphanum().required(),
    lastName: Joi.string().alphanum().required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().alphanum().required(),
    gender: Joi.string().alphanum().required(),
    designation: Joi.string().alphanum().required(),
    dateOfJoining:  Joi.date().raw().required(),
    reportingManager:Joi.string().alphanum().required(),
    salary:   Joi.number().integer().min(0).required(),
    employeeCode:Joi.number().integer().min(0).required(),
    location : Joi.string().alphanum().required(),
    state : Joi.string().alphanum().required(),
    country : Joi.string().alphanum().required(),
    department : Joi.string().alphanum().required(),
    deletedAt: Joi.date().raw().required()

  });
  
  const editEmployeeSchema = Joi.object({
    firstName: Joi.string().alphanum(),
    lastName: Joi.string().alphanum(),
    email: Joi.string().email(),
    mobile: Joi.string().alphanum(),
    gender: Joi.string().alphanum(),
    designation: Joi.string().alphanum(),
    dateOfJoining:  Joi.date().raw(),
    reportingManager:Joi.string().alphanum(),
    salary:   Joi.number().integer().min(0),
    employeeCode:Joi.number().integer().min(0),
    location : Joi.string().alphanum(),
    state : Joi.string().alphanum(),
    country : Joi.string().alphanum(),
    department : Joi.string().alphanum(),
    deletedAt:Joi.date().raw()
});
  
  module.exports = {
    addEmployeeSchema,
    editEmployeeSchema,
  };