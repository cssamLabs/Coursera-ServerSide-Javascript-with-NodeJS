// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        if(math == undefined || english == undefined || science == undefined || social == undefined || language == undefined) {
            reject('Null values for marks')
        }
        if( (typeof(math) !== 'number') || (typeof(english) !== 'number') || (typeof(science) !== 'number') || (typeof(social) !== 'number') || (typeof(language) !== 'number')) {
            reject('Marks are not numbers')
        }
        let total = math + english + science + social + language;
        resolve(total);
    }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        if(totalMarks == undefined || (typeof(totalMarks) !== 'number')){
            reject('Invalid totalMarks')
        }
        resolve(totalMarks/5);
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
       if(averageMarks == undefined || (typeof(averageMarks) !== 'number')){
           reject('Invalid averageMarks')
       }
       let grade = 'F';
       switch(true){
            case averageMarks >= 90:
                grade = 'A+'
                break;
            case averageMarks >= 85:
                grade = 'A'
                break;
            case averageMarks >= 70:
                grade = 'B'
                break;
            case averageMarks >= 60:
                grade = 'C'
                break;
            case averageMarks >= 50:
                grade = 'E'
                break;
            case averageMarks < 50:
                grade = 'F'
                break;   
       } 
       resolve(grade);
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
