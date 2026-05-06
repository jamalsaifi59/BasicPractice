const name = ["jamal", "azhar", "faiz", "kashif"]

// name.forEach( function (item){ // Normal function
//     console.log(item)
// })


// name.forEach((item) => { // Callback function
//     console.log(item)
// });

// function printMe(item){
//     console.log(item)
// }
// name.forEach(printMe)

// name.forEach( (item,index,arr) => {
//     console.log(item,index, arr)
// })

const newName = [
    {
        name : "jamal",
        age : 26
    },
    {
        name : "azhar",
        age : 28
    },
    {
        name : "kashif",
        age : 26
    }
]

// newName.forEach( (item) => {
//     console.log(item.name)
// } )

// const values = name.forEach((item) => {
//     console.log(item)
//     return item // for each directly not return
// });
// console.log(values)

const number = [1,2,3,4,5,6,7,8,9]

// const newNum = number.filter( (num) => num > 4 )
// console.log(newNum)

const newNum = []
number.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
} )
console.log(newNum)