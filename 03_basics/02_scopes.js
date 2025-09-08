// let a = 594

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("INNER ", a)
// }

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "naeem"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    //console.log(website)

    two()

}
// one()

if (true){
    const usename = "naeem"
    if(usename === "naeem"){
        const website = " youtube"
        // console.log(usename + website)
    }
    // console.log(website)
}

// console.log(username)


// ++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}


addtwo(5)
const addtwo = function(num){
    return num + 2
}

