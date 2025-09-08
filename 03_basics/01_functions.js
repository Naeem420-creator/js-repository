function sayMyname(){
    console.log("N");
    console.log("a");
    console.log("e");
    console.log("e");
    console.log("m");
}

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(4, 7)
// addTwoNumbers(4, "7")

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)

// function loginUserMessage(userName){
//     if(userName === undefined){
//         console.log("Please enter a username")
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("Naeem"))
// console.log(loginUserMessage())

function calculatePrice(val1, val2, ...num1){
    return num1
}

//console.log(calculatePrice(200, 400, 700, 3000))

const user = {
    username: "naeem",
    price: 329
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "naeem",
    price: 389
})

const myNewArray = [200, 300, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 300,800,799]))