const datas = [
    {name: "jamal", mobile: 8979069126, address: "mota aam", DOB: "2000"},
    {name: "azhar", mobile: 9719304062, address: "dariyapur", DOB: "1997"},
    {name: "faiz", mobile: 8979069, address: "muglusha", DOB:  "1999"},
    {name: "jamal", mobile: 8979069126, address: "mota aam", DOB:  "2000"},
    {name: "kashif", mobile: 8126884455, address: "mota aam", DOB: "2000"},
    {name: "jamal", mobile: 8979069126, address: "mota aam", DOB: "2000"},
    {name: "abdul", mobile: 7983331057, address: "mota aam", DOB: "2004"},
    {name: "saifi", mobile: 8979069126, address: "mota aam", DOB: "2001"},
    {name: "nadeem", mobile: 8979069126, address: "shakur nagar", DOB: "1990"},
    {name: "jamal", mobile: 8979069126, address: "mota aam", DOB: "2000"},
]

let userDetails = datas.filter( (dd) => dd.name === "jamal")
// console.log(userDetails)

userDetails = datas.filter( (dd) => {
    return dd.name === "azhar" && dd.DOB <= 2000
})
console.log(userDetails)