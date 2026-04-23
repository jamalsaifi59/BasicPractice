
//++++++++++ Numbers +++++++++
const score = 400
// console.log(score)

const balanc = new Number(500)
// console.log(balanc.toString().length)

const otherNumber = 109.234213
// console.log(otherNumber.toFixed(2))


const other = 123.2389
// console.log(other.toPrecision(5))

const countZeros = 10000000
// console.log(countZeros.toLocaleString())

// ++++++++ Maths +++++++++

console.log(Math.abs(-4))
console.log(Math.round(5.5))
console.log(Math.ceil(3.2))
console.log(Math.floor(4.5))
console.log(Math.min(4,6,8))
console.log(Math.max(98,212,43))
console.log(Math.random()) // value always between 0 to 1
console.log((Math.random()*10) + 1) // formula value in minimum 1

const max = 10
const min = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // second formula