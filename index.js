// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {... employee} //create clone 
    return  {...employee,  //original
    [key]: value,          //new key value pairs
            };  
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  //update from empty
    return employee; 
}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Create clone 
    delete newEmployee[key]; // Delete the key-value pair
    return newEmployee;
  }

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]; //delete from existing
    return employee;
}