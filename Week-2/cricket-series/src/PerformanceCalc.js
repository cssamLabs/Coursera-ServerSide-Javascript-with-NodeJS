/** challange
 *  Claculate the avarage performance
 * |  Player Score                           | Batting Average         |
 * ---------------------------------------------------------------------
 * | More than 30 runs in less than 15 balls | Give the addiional 1%   |
 * | More than 50 runs in less than 20 balls | Give the additional 10% |
 * | More than 100 runs in less than 50 balls| Give the additional 20% | 
 * ---------------------------------------------------------------------
 * 
 * Calculate the average performance
 * create seperate functions to achieve the objective
 * Create array object to maintain data
 * Export all the functions
 * Create mai function inside the index.js
 *  
 */



const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      let average = runs/balls;
      if(runs>30 && balls<15){
            average += average*0.01;
      } else if(runs>50 && balls<20){
            average += average*0.1;
      } else if(runs>100 && balls<50){
            average += average*0.2;
      }
      return average;
}





module.exports={PerformanceCalculator}
