
//import all the require module
const fs = require('fs')
const readline = require('readline');
const lodash = require('lodash')

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
 //create array name it as  fileContents
const readFileContents = (fileName, cb) => {
 
  try {
    const file = readline.createInterface({input: fs.createReadStream(fileName)})
  
    //push row by row data in the array created
   let fileContents = [];
 
   file.on('line', (line)=>{
       fileContents.push("line");
   })
   setTimeout(()=>{
    fileContents.splice(0, 1) // remove column name line
    console.log('fileContents size: ', fileContents.length)
    file.close();
    cb(null, fileContents)
   }, 1000)

  } catch(err){
    cb(err, null)
  }

}

// Filter all the records where payment_method is 'credit'​
// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  try{
    let filteredData = lodash.filter(fileContents, function(content){
      return content.payment_method == 'credit'
    });
    cb(null, filteredData);
  } catch(err){
    cb(err, null)
  }
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    //use writeFile method and write the filteredData in output.txt file
    const writeStream = fs.createWriteStream('./resources/outputfile.txt')
    writeStream.write(filteredData.toString()+"\n")
    cb(null, "Successfully wrote filtered data to output.txt file..!");
  } catch (err) {
    cb(err, null)
  }
}


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
