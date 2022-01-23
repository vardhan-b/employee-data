# employee-data

# problem statement

Create Employee schema with the following fields:

FirstName (String)
LastName (String)
Email (String)
Mobile (String)
Gender (String)
Designation (String)
DateOfJoining (Date)
ReportingManager (String)
Salary (Number)
EmployeeCode (Number)
Location (String)
State (String)
Country (String)
Department (String)
DeletedAt (Date)

# Write the following REST APIs for the following schema
- [] Create Employee
Method: POST
Path: /api/employee
Payload: All the fields mentioned in schema

- [] Update Employee
Method: PUT
Path: /api/employee/:id
Payload: All the fields mentioned in schema

[] Deactivate / Activate Employee
Method: PUT
Path: /api/employee/:id/:action
Note:
● If the action is ‘deactivate’, set DeletedAt key to current date.
● If action is ‘activate’, set DeletedAt to null. Do not remove the employee from the database.
