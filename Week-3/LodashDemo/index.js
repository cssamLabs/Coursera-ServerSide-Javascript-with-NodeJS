const lodash = require('lodash')

const nums = [1, 2, 2, 3, 4, 1];

let result = lodash.uniq(nums);

console.log(result);

const data = lodash.concat(nums, [7,8])

console.log(data)

lodash.fill(nums, 10)
console.log(nums);

lodash.fill(nums, '*', 1,3)

console.log(nums)

var countries = [
    {"key" : "DE", "name" : "Deusts"},
    {"key" : "SA", "name" : "South Africa"},
    {"key" : "SL" , "name" : "Sri Lanka"},
    {"key" : "USA" , "name" : " United States"}
]

var countrydata = lodash.filter(countries, function(country){
    return country.key == 'SL'
})

console.log("countrydata: ",countrydata);
