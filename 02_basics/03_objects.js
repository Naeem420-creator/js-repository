// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const jUser = {
    name: "Naeem",
    [mySym]: "myKey1",
    age: 22,
    email: "naeem@gmail.com",
    location: "Sambrial",
    isLoggedIn: "false"
}

// console.log(jUser.email)
// console.log(jUser["email"])

// console.log(jUser[mySym])

// jUser.email = "neemi@dss.com"
// Object.freeze(jUser)
// jUser.email = "nwsw@oedokw.com"

// console.log(jUser)

jUser.greeting = function() {
    console.log("Hello Naeem");
}

jUser.greetingTwo = function() {
    console.log(`Hello Naeem, ${this.name}`);
}

console.log(jUser.greeting());
console.log(jUser.greetingTwo());