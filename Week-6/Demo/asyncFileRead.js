const fs = require('fs')

const readData = (fileName) =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, (error, data)=>{
            if(error){
                return console.log('Error reading file ', error.message)
            }
            console.log(data)
        })
    })
}

readData("input.txt").then(data => {
    console.log(data)
}).catch(err=>{
    console.log(err)
})
