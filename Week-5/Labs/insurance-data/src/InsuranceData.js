//import all the modules require
const fs = require('fs')
const readline = require('readline')
const lodash = require('lodash')
const csv = require('csv-parser')

//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {
 
  try {  
    let fileContents = [];

    const rl = readline.createInterface({
      input: fs.createReadStream(fileName),
      output: process.stdout,
      terminal: false
    });

    rl.on('line', (line)=>{
      fileContents.push(line)
    })

    setTimeout(()=>{
      //console.log('fileContents size: ', fileContents.length)
      rl.close();
      cb(null, fileContents)
    }, 1500)
  } catch(err){
    cb(err, null)
  }
}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {

  try {
    let filteredData = lodash.filter(fileContents, (content)=>{
      if((content.indexOf('female') !== -1)&& (content.indexOf('southwest') !== -1)){
        return content
      }
    })
    
    //use lodash.compact() method if required
    lodash.compact(filteredData) ;

    cb(null, filteredData)  
  } catch(err){
    cb(err, null)
  }

}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
 
    //use writeFile method to write the filteredData
    try {
      //use writeFile method and write the filteredData in output.txt file
      const writeFile = fs.writeFile(filteredData, outputFileName)
      cb(null, "Successfully wrote filtered data to output.txt file..!");
    } catch (err) {
      cb(err, null)
    }
  
}


//This method will read the file content using Streams
//create array and push all the data from file to it
const readFileContentsUsingStream = (fileName, cb) => {
  try {
    let fileContents = [];

    const readableStream = fs.createReadStream(fileName);
    readableStream.on("error", (err) => {
      console.log("Error while reading contents of file using streams, ERROR::", err);
      cb("Encountered error while reading file contents using streams..!", null);
    })
    readableStream
    .pipe(csv())
    .on('data', (line)=>{
      fileContents.push(line)
    })

    // const chunk = '';
    // readableStream.on('readable', function(){
    //   while((chunck=readableStream.read()) != null) {
    //     fileContents.push(chunk);
    //   }
    // });

    setTimeout(()=>{
      //fileContents.splice(0, 1)// remove column name
      console.log('fileContents size: ', fileContents.length)
      cb(null, fileContents)
    }, 1000)
     
  } catch(err){
    cb(err, null)
  }
}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data
const filterDataWithNoChildren = (fileContents, cb) => {
  try {
        
    lodash.compact(fileContents)    //use lodash.compact() if required 
    let filteredData = fileContents.map(content =>{
      if(content.indexOf('no') !== -1){
        return true
      }
    })
    cb(null, filteredData)
  } catch(err){
    cb(err, null)
  }
}




module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
 }
