function userLogIn (username = "jamalsaifi"){
    if(!username){
        console.log("Please enter your full details")
        return
    }
    return `${username} User just logged In`

}
// console.log (userLogIn())


// (...num) rest operator & sprit operator depend whice situation to use
function calculator(...num){
    return num

}
// console.log(calculator(200,400,500))

const user = {
    username : "jamalsaifi",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

// simple way to define
handleObject({
    username : "saifi",
    price : 299
})

const myArray = [200,300,400,500]

function returnSecondvalue(getArray){
    return getArray[2];
}

// Both logic is same work by function and direct in function
// console.log(returnSecondvalue(myArray))
console.log(returnSecondvalue([200,300,400,500]))