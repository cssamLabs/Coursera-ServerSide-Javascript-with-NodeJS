const chalk = require("chalk");

const mathCalculator = require("./src/mathCalculator");
const scientificCalculator = require("./src/scientificCalculator");

// Read choice from console and execute `npm start math` or `npm start scientific`
const choice = null; 

const mathNum1 = 20;
const mathNum2 = 4;
const scfNum = 9.5;

if (choice === "math") {
 // Display all math operations

} else if (choice === "scientific") {
  // Display all scientific operations

} else {
  console.log("Please enter valid choice..!");
}