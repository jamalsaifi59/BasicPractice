const name = ["jamal","saifi", "azhar"]
const newName = ["moni","raza", "salman"]

// console.log(newName)

// push method combine 2 arrays but problem is in 1 array combine for 2 arrays

name.push(newName)
// console.log(name)

// concat compine 2 arrays in 1 array and concat always return a new array
const allName = name.concat(newName) 
// console.log(allName)

// spirit operator

const allMarge = [...name, ...newName]
// console.log(allMarge)

// Rare cases for tha
const myArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]
// console.log(myArr.flat(Infinity))


// Arrays catogery return boolean and object
console.log(Array.isArray("jamal"))

// create new array and for everythink 
console.log(Array.from("jamal"))

// return a empty array and define is key and value
console.log(Array.from({name : "jamal"}))

// return a new array from a set of element 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))