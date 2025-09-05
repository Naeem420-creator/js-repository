// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "232"
tinderUser.name = "Neemi"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const rugularUser = {
    email: "neemi@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Naeem",
            lastName: "Butt"
        }
        }
}

// console.log(rugularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: "1",
        email: "n@gmail.com"
    },
     {
        id: "2",
        email: "nsagmail.com"
    },
]

// console.log(users[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('name'))

const course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseName

const {courseInstructor: instructor} = course
console.log(instructor)

// {
//     "instructor": "hitesh",
//     "course": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]