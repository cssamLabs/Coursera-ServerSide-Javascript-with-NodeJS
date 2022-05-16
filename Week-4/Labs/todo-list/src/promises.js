const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = () => {
    return new Promise((resolve,reject)=>{
        if(todolist == null){
            reject()
        }
        resolve(todolist)
    }) 
}
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
   return new Promise((resolve,reject)=>{
      if(todo == undefined){
          reject('No data to be added')
      }
      todolist.push(todo);
      resolve(todolist);
   })
}
module.exports ={
    createTodo,getAllTodos
}