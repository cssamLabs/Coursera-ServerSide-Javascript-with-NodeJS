const users = require('./users')
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = ()=>{
    return new Promise((resolve, reject)=>{
        if(users == undefined){
            reject('users undefined')
        }
        resolve(users)
    })
 
}
//Define a function to create a new user and return a promise
const createUser = (user) => {
    return new Promise((resolve, reject)=>{
        if(user == undefined){
            reject('No user to be added')
        }
        users.push(user)
        resolve(user)
    })
    
 }
// Define a function to get a user by id and return a promise
const getAUserByID = (id) =>{
    return new Promise((resolve, reject)=>{
        if(id == undefined){
            reject('id is undefined')
        }
        const idUsers = users.filter(user =>(user.id===id))
        if(idUsers == null){
            reject('User does not exist')
        }
        resolve(idUsers)
    })
}
// Define an async function that calls the createUser and getAllUsers function using await 
// and returns all users
const displayUsers = async (user) => {
   await createUser(user); 
   const allUsers = await getAllUsers();
   return allUsers;
}
//Define a async function to display a specific user by Id
// return the user 
const displayAUser = async(id) =>{
    const user = await getAUserByID(id);
    return user;
}

module.exports = {
    getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
}