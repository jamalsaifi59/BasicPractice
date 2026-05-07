
/*Map:- is used to each item in an array transfrom every value
    but array size is stay same (Map:- change every item)
*/

/**
 filter:- is used to select item from in array based condition
 it return a new array the new array smaller or even empty
 (Filter :- keep some item)
 */

const number = [1,2,3,4,5,6,7,8,9,10]

// const newNum = number.map( (num) => num + 10)
// when use to scope must use to return
// const newNum = number.map( (num) => {return num + 10}) 

const newNum = number
            .map( (num) => num * 10)
            .map( (num) => num + 1)
            .filter( (num) => num >= 30)
// console.log(newNum)

// reduce 

// acc:- accumulator 
// curr :- current value
const cart = [1,2,3]
const totalCart = cart.reduce( (acc, curr) => acc + curr , 0)
// console.log(totalCart)

const flipCart = [
    {
        course: "javaScript",
        price: 1999,
    },
    {
        course: "python",
        price: 2999,
    },
    {
        course: "c++",
        price: 999,
    },
]

const totalPrice = flipCart.reduce((acc,item) => acc + item.price, 0)
console.log(totalPrice)