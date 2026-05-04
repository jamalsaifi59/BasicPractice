// for of loops

// ["", "", "",] string
// [{}, {}, {}] Objects

const array = [1,2,3,4,5]
for (const num of array) {
    // console.log(num)
}

const greeting = "Hello Jamal saifi"
for (const greet of greeting) {
    // console.log(`greeting to you ${greet}`)
}

/// Map
// Map not itertable in forin loop
const map = new Map()
map.set('IN','India')
map.set('USA','United state of America')
map.set('FR','France')

for (const key of map) {
    // console.log(key)
}

for (const [key, value] of map) { // sentax key and value
    // console.log(key, ':-', value)
}

const newObj = {
    js:"javascript",
    cpp: "c++",
    py: "pythan"
}  // not working in Objects like this (for of loop)
// for (const [key, value] of newObj) { // sentax key and value
//     // console.log(key, ':-', value)
// }
 
/// work in (for in loop)
for (const key in newObj) {
    // console.log(`${key} shortcut is for ${newObj[key]}`)
}

// Major diffirence of array and Objects 
// arrays give value in number 
// Objects gives keys
const programming = ["js","php", "node", "css"]  

for (const key in programming) {
    console.log(programming[key])
}