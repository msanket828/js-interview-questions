
let employee={
  name: 'sanket',
  age: 28,
  designation: 'UI developer',
  salary: '25000',
  address: {
    city: 'Navi Mumbai',
    state: 'Maharashtra',    
  }
}
// let newEmployee=employee;
// let newEmployee={...employee};
let newEmployee=_.cloneDeep(employee);
newEmployee.name='Karan';
newEmployee.address.city='Mumbai';

console.log('default employee: ',employee);
console.log('new employee: ',newEmployee);