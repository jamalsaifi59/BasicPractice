const user = {
    username : "jamal saifi",
    email : "saifisahab@gmail.com",
    price : 399,
    location : "Najibabad",

    welcomeMassage: function(){
        console.log(`Welcome ${this.username}, to the website`)
        console.log(this)
    }
    
}

// user.welcomeMassage()
// user.username = "change"
// user.welcomeMassage()

function check(){
    let username = "jamal"
    // console.log(this.username) // (this) not work in direct function call
}

const check = function (){ // same condition 
    let username = "jamal"
    // console.log(this.username) // (this) not work in direct function call
}

const check =  () => { // same condition 
    let username = "jamal"
    // console.log(this.username) // (this) not work in direct function call
}

// check()

const addNumber = (num1, num2) =>{ //  simple arrow function defination
    return num1 + num2
}

// const addNumber = (num1, num2) => num1 + num2 // most use case of react 

// const addNumber = (num1, num2) => (num1 + num2) // most use case react

// how to define object in arrow function like this
const addNumber = (num1, num2) => ({username : "jamal"}) 

// console.log(addNumber(2,5))