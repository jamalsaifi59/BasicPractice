// Dates

const myDate = new Date("01-04-2026")
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

let timeStamp = Date.now()
console.log(timeStamp)
console.log(myDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth)