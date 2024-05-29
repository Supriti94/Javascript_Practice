//passing array as parameter

let arrnum=[1,2,3,4];

const x=function(arrnum){return arrnum;
}

console.log(x(arrnum));
// passing object as parameter
const user = {
    username: "supriti",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


//using spread...
function printnum(...nums){

    return nums;
}

console.log(printnum(1,2,3,5,8,9,12));