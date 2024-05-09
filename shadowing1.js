//for let
let x = 10;

function outer() {
  let x = 20;

  function inner() {
    console.log(x); // 20
  }

  inner();
}

outer();
console.log(x); // 10
