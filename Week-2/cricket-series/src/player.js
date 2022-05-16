const PerformanceCalculator = require('./src/PerformanceCalc')


let players = [];

const addPlayer = (playername, runs, balls) =>{
      let playerPerformance = {
            playername: playername,
            performance: PerformanceCalculator(runs, balls)
      }
      players.push(playerPerformance);
};


const getPlayer = (name) => {
      players.find(({playerName})=>playerName === name)  
}

const getPlayerList = ()=> {
      return players;
}

// var x = function ( a ,b ) { 
//       var result = 1; 
//       for ( var count = 0; count < b ; count ++) 
//       result *= a; 
//       return result; 
// }; 
// console.log ( x (2 , 10) ) ;



module.exports = {addPlayer, getPlayer, getPlayerList}


var carMakes =  ; 
console.log('Old array : ' +carMakes.join()); 
carMakes.splice(2,1, 'ALPHA-ROMEO'); 
console.log('New array : ' +carMakes.join());