
const mySym = Symbol("jamal")

const jsUser = {
    name : "jamal saifi",
    email : "jamalsaifi@gmail.com",
    location : "Najibabad",
    age : 26,
    [mySym] : "saifi"
}
// console.log(jsUser)
// console.log(typeof jsUser[mySym])

jsUser.email = "saifijamal@google.com"
// Object.freeze(jsUser)
jsUser.email = "hfsd@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello User")
}
// console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello User ${this.name}`)
}
// console.log(jsUser.greetingTwo())

const twitter = new Object ()  // single ton Object
const twitterOne = {}  // Non single ton

const regulerUser = {
    email : "jamalsaifi@gmail.com",
    fullname : {
        username : {
            firstName : "saifi",
            lastName : "sahab"
        }
    }
}
console.log(regulerUser.fullname.username)