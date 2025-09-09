// Immediatetly Invoked Function Expressions (IIFE)

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

// un-named IIFE
( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
}  )("naeem")