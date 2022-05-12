/** Customer module
 * Create a customer module to store and update customer details
 * Create an add customer option and update customer methods in the customer module
 * Customer: Id, Name, Age, Address, Contact No, 
 * Export all the functions
 * 
 */
 const {category}=require('./category');

var customerList=[];

const checkCustomer = (customerId) => {
      for(let i=0; i<customerList.length;i++){
            let cust = customerList[i];
            if(cust.Id == customerId){
                  //console.log('found the customer: ', customerId);
                  return true;
            }
      }
      return false;
}

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      if(!checkCustomer(CustomerId)){

            let customer = {
                  Id:CustomerId,
                  Name:CustomerName,
                  Age:CustomerAge,
                  Address:CustomerAddress,
                  ContactNumber:CustomerContactNumber,
                  Category:category(Category)
            }
            //console.log('customer at add: ', customer);
            customerList.push(customer);
            //console.log('customerList at add: ', customerList);      
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      // customerList.filter(customer=>customer.Id==CustomerId)
      // .map(cust => 
      //       {cust.Name= CustomerName, cust.Age= CustomerAge, cust.Address= CustomerAddress, cust.ContactNumber= CustomerContactNumber, cust.Category= category(Category)}
      // )
      let customer = {
            Id:CustomerId,
            Name:CustomerName,
            Age:CustomerAge,
            Address:CustomerAddress,
            ContactNumber:CustomerContactNumber,
            Category:category(Category)
      }
      for(let i=0; i<customerList.length;i++){
            let cust = customerList[i];
            if(cust.Id == CustomerId){
                  console.log('found the customer: ', CustomerId);
                  customerList[i] = customer;
                  return;
            }
      }

}

const getAllCustomers=()=>{
  // Write the Logic here
//   console.log('customerList at getAll: ', customerList);
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}