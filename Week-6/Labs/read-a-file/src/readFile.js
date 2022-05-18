const fs = require("fs");
// import the lodash library
const lodash = require("lodash");
const readline = require('readline');

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    try {
      if(!fs.existsSync(fileName)){
        reject("Encountered error while reading file contents..!")
      } else {
        const readableStream = fs.createReadStream(fileName);
        readableStream.on("error", (err) => {
           reject("Encountered error while reading file contents..!")
        })
    
        const file = readline.createInterface(readableStream)
        file.on('line', (line)=>{
            const items = line.split(",")
            //console.log('items at read: ', items)
            resolve(items)
        })
      }
    } catch(err){
      reject(err)
    }

  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    try {
      let upperCaseItems = []
      for(const element of fileContents){
        const data = (element.toUpperCase());
        upperCaseItems.push(data); 
      }
      // console.log('upperCaseItems at convertToUpperCase: ', upperCaseItems)
      resolve(upperCaseItems)

    } catch(err){
      reject(err)
    }

  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  read(fileName)
    .then((result)=>{
        //console.log("returened from read: ", result)
        convertToUpperCase(result).then((upperedItems)=>{
            //console.log("returned from convertToUpperCase: ", upperedItems)
            cb(null, upperedItems)
        }).catch((err)=>{
          //console.log('err convertToUpperCase: ', err)
          cb(err, null)
        })
    })
    .catch((err)=>{
      //console.log('err read: ', err)
      cb(err, null)
    })
};

module.exports = {
  readAndConvertFileContents,
};
