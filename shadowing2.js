//for let
let x = 10;

function shadowingExample() {
  let x = 20;
  console.log(x); // 20
}

shadowingExample();
console.log(x); // 10
