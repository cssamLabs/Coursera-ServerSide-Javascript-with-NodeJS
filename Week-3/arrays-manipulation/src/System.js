
//import OS module
const os = require('os')

//Create a function to get the name of the operating system of host machine.​
function getOSName(){
  return os.platform();
}
//console.log('Operations system: ', operationSystem);

//Create a function to get returns the number of free memory of the system in bytes.​
function getFreeMemory(){
  return os.freemem();
}
// console.log('Free Memory: ', freeMemory);

//Create a function to get the information about current user of the system.​
function getCurrentUser(){
  return os.userInfo().username;
}
// console.log('Current User: ', currentUser);

//Create a function to get the information of the hostname.
function getHostName(){
  return os.hostname();
}
// console.log("Hostname: ", hostname);

//Create a function to get the information about the CPU.
function getCPUDetails(){
  return os.cpus();
}
// console.log("CPU info: ", cpu);


module.exports = {
  getOSName,
  getFreeMemory,
  getCurrentUser,
  getHostName,
  getCPUDetails
}