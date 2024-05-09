var outerVar = 10;

function outerFunction() {
  console.log(outerVar); // undefined
  var outerVar = 20;

  innerFunction(); // "Inner function"
  function innerFunction() {
    console.log("Inner function");
  }
}

outerFunction();