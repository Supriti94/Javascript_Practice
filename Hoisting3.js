console.log(myVar); // undefined
var myVar = 10;

hoistedFunction(); // "Function is hoisted!"
function hoistedFunction() {
  console.log("Function is hoisted!");
}
