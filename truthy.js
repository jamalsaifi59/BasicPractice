const userEmail = "jamal@gmail.com"
if(userEmail){
    console.log("Got user Emai")
}else{
    console.log("Dont have user Email")
}

// Falsy values 
// false , 0, -0, BigInt 0n, "", null, undefine, NaN 

// Truthy values
// "0", 'false', " ", [], {}, function(){}

const myArray = [] // Array check empt or not
if(myArray.length === 0){
    // console.log("Array is Empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}

// Nullish coalescing operator (??): null, undefined

// let val1 = 5 ?? 10
let val1 = null ?? 10
    val1 = undefined ?? 11
    val1 = null ?? 10 ?? 15 // all condition assign a first value 
console.log(val1)
