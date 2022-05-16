 
   // Define a getEmployee function that iterates over the employees list and displays it
   // Employees must be displayed after a timeout of 1 second.
   getEmployee = (employees, callback)=> {
       return setTimeout(() => {        
           // Write code here to display the name of the employee and return a callback
           let result = [];
           employees.forEach(element => {
            result.push(element.name)
           });        
           return callback(undefined, result);           
       }, 1000);
   }
   
   // Define a function that creates a new employee after 2 seconds.
   // and then makes a call to callback function to display the same.
   createEmployee = (employees, employee, callback) => {   
       setTimeout(()=>
       {
           // write your code here to push new employee to employees list and return a callback.  
           employees.push(employee);         
           return callback(undefined, employees);
       }, 2000)
   }  

   module.exports = {getEmployee,createEmployee}
  


