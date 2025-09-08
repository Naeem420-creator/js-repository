const user = {
    username: "naeem",
    price: 344,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "zami"
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username = "naeem"
//     console.log(this)
// }
// one()

// const chai = function(){
//     let username = "naeem"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username = "naeem"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "naeem"})


// console.log(addTwo(3,4))

// const myArray = [2, 4, 8, 3]

// myArray.forEach()