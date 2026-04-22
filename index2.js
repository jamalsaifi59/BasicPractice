/*
DATA TYPE
Primitive 7 type of data
type : string, Number, Boolean, null, undefined, symbol, Bigint
*/

const id = Symbol('1234');
const anotherId = Symbol('1234')

// console.log(id === anotherId)

// valuse are same but always result is deferent false and other

const bigNumber = 754298715878376883756n // Bigint Number
// console.log(bigNumber)

/*

Reference (Non Primitive)
type : Array, Object, functions 

*/

const villains = ["Tamrajkilvish", "Mogebo", "Rana Ji"]

let myObj = {
    name: "jamal",
    age: 26,
}

const myFunction = function(){
    console.log("hey jamal saifi")
}
myFunction()
console.log(typeof myFunction)