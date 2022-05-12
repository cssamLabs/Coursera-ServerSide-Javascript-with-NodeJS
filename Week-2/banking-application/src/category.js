/** create a category module to store 
 * the type of moudules the bank maintain  
 * | Key | Value         |
 * -----------------------  
 * | PL  | Personal Loan |
 * | VL  | Vehicle Loan  |
 * -----------------------
 * 
 * */

var category = function category(key) {
  
    // Write the Logic here
    let value = '';
    switch(key){
      case 'PL':
        value = 'Personal Loan';
        break;
      case 'VL':
        value = 'Vehicle Loan'; 
        break;
      case 'EL':
        value = 'Education Loan';
        break;
      case 'HL':
        value = 'Home Loan';
        break;
    }

    return value;
  };
  
  module.exports = {
    category: category
  };