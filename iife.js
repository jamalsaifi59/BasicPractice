
// Immediataly Invoked function Expression (IIFE)

function test(){    ///  its Normal function to call and connect DB
    console.log(`DB Connected`)
}
// test()

(function some(){
    // Name IIFE function
    console.log(`DB CONNECTED`)
})(); // Immediataly invoked function to connect Database
    // NOTE : ; required beacuse another function not 
    // run 

    // () // defination of function
    // ()() // defination and exicution of code invoked function

( () => {
    console.log(`again connecte`)
})(); // arrow function also work in invoked function Expression

( (name) => {
    // Normal IIFE function
    console.log(`again connecte ${name}`)
})("jamal")