
//import all the require modules
const fs = require('fs')
const readline = require('readline')
const lodash = require('lodash')
const csv = require('csv-parser')

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const readFileContents = async(fileName, cb) => {
  try {
    if(!fs.existsSync(fileName)){
      cb("Encountered error while reading file contents..!", null);
    } else {
      let fileContents = [];

      const readableStream = fs.createReadStream(fileName);
      readableStream.on("error", (err) => {
        console.log("Error while reading contents of file using streams, ERROR::", err);
        cb("Encountered error while reading file contents..!", null);
      })
      const rl = readline.createInterface({
        input: readableStream,
        output: process.stdout,
        terminal: false
      });
  
      rl.on('line', (line)=>{
        fileContents.push(line)
      })
  
      setTimeout(()=>{
        fileContents.splice(0, 1)// remove column name
        console.log('fileContents size: ', fileContents.length)
        rl.close();
        cb(null, fileContents)
      }, 500)
    }

  } catch(err){
      cb(err, null)
  }
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = async(fileContents, cb) => {
  //use lodash.sortBy()
  try {
    let filteredData = await fileContents.map(content =>{
      const parsed = parseInt(content.retail_price, 10);
      if (isNaN(parsed)) { 
        return
      } else {
        content.retail_price = parsed;
        return content; 
      }
    })
    //console.log('filteredData: ', filteredData)
    filteredData = lodash.compact(filteredData)
    let sortedData = lodash.sortBy(filteredData, ['retail_price'])
    
    setTimeout(()=>{
      //console.log('sortedData - price: ', sortedData)
      cb(null, sortedData);
    }, 1000)

  } catch(err){
    cb(err, null)
  }

}

//This method will sortDataonRating 
const sortDataOnRating = async(fileContents, cb) => {
  try {
    //use map where ever required 
    let filteredData = await fileContents.map(content =>{
      const parsed = parseInt(content.product_rating, 10);
      //console.log('parsed: ', parsed)
      if (isNaN(parsed)) { 
        return  
      } else {
        content.product_rating = parsed;
        return content 
      }
    })
    //use lodash sortBy() and compact() if required
    filteredData = lodash.compact(filteredData)
    let sortedData = lodash.sortBy(filteredData, ['product_rating'])

    setTimeout(()=>{
      //use lodash.reverse() if required
      sortedData = lodash.compact(sortedData)
      const reversedData =lodash.reverse(sortedData);
      //console.log('reversedData rating: ', reversedData)
      cb(null, reversedData);
    }, 500)

  } catch(err){
    cb(err, null)
  }

}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
  try {
      const writeFile = fs.writeFile(sortedData, outputFileName)
      cb(null, "Successfully wrote filtered data to output.txt file..!");
  } catch(err){
    cb(err, null)
  }
}


module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}