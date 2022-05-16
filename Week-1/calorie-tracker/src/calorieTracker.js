/** calculate the number of pounds Sam can lose in a month 
 * if he does the above mentioned activities 
 * once a week for 1 hour and chooses to do one activity per day.​
 */

const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;

   // write logic here
   if(cycling <= 0){
      return -1;
   }
   else if(running <=0){
      return -1;
   }
   else if(swimming <=0){
      return -1;
   }
   else if(extraCalorieInTake != 100){
      return -1;
   }
   else {
      let totalCaloriesBurned = cycling + running + swimming - extraCalorieInTake;
      // console.log('totalCaloriesBurned: '+totalCaloriesBurned);
      weightLostInAMonth = totalCaloriesBurned / 1000;
      // console.log('weightLostInAMonth: '+weightLostInAMonth)
      return weightLostInAMonth;
   }
   
}

module.exports = calculateWeightLostInAMonth

