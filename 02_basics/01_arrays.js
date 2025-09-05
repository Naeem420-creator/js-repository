// array

const myArray = [0, 1, 2, 3, 4, 5]
const myArray2 = new Array(1, 2, 3, 4, 5)

// console.log(myArray[3])

// Array methods

// myArray.push(6)
// myArray.pop()

// myArray.unshift(8)
// myArray.shift()

// console.log(myArray.includes(8))
// console.log(myArray.indexOf(8))

// const newArray = myArray.join()

// console.log(myArray)
// console.log(newArray)


// slice, splice

console.log("A ", myArray)

const myn1 = myArray.slice(1, 3)

console.log(myn1)
console.log("B ", myArray)

const myn2 = myArray.splice(1, 3)
console.log("C ", myArray)
console.log(myn2)