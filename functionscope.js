function one(){
    const username = "jamalsaifi"

    function two (){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const name = "jamal"
    if(true){
        const website = ", insta"
        // console.log(name + website)
    }
}

// before decleration to use function exicution
console.log(addone(5))
function addone (num){
    return num + 1
}

// Dont be before decleration to use function exicution
const addTwo = function (num){
    return num + 2
}
console.log(addTwo (78))