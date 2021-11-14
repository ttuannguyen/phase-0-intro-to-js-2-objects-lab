// Write your solution in this file!

let employee = {
    name: 'Sam', 
    streetAddress: "12 Broadway", 
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
} 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}