var employee = process.argv[2];
var age = parseInt(process.argv[3]);
var basicSalary = parseFloat(process.argv[4]);

if(age<=0){
    console.log('Invalid age, enter a valid age')
}
else if(basicSalary==0){
    console.log('Invalid basic salary, enter valid salary')
} else {
    const hra = (50*basicSalary)/100
    const specialAllowance = (30*basicSalary)/100
    const pf = (12*basicSalary)/100
    
    let grossSalary = (basicSalary+hra+specialAllowance)-pf
    
    let annualGrossSalary = 12 * grossSalary
    
    console.log(`The annual gross income of ${employee} is ${annualGrossSalary}`)
}



/** run the code by
 * node salaryCalculator.js Chandima 34 2000
 */