
// Operators : <less then, >greater then, <=less then or equal, >= greater then or equal,
//              == check, != not equal, === type checking, && And, || OR,

const temperature = 27;
if (temperature == 45 && temperature){
    console.log("Today out side is very hot")
}
else if (temperature <= 40 && temperature >= 36){
    console.log("Today out side is hotest")
}
else if (temperature <= 35 && temperature >= 31){
    console.log("Today out side hot")
}
else if (temperature <= 30 && temperature >= 28){
    console.log("Today out side weather is Normal")
} else {
    console.log("you shoulde go out side")
}

const month = "may"
switch (month) {
    case "jan":
        console.log("january")
        break;
    case "feb":
        console.log("feb")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;
    case "may":
        console.log("may")
        break;
    case "june":
        console.log("june")
        break;

    default:
        break;
}