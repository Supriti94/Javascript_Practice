var x = 10;

function outer() {
  console.log(x); // undefined
  var x = 20;

  function inner() {
    console.log(x); // 20
  }

  inner();
}

outer();
console.log(x); // 10
