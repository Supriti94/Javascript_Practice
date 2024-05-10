var x = 10;

function outer() {
  console.log(x); // undefined
  if (true) {
    var x = 20;
    console.log(x); // 20
  }
  console.log(x); // 20
}

outer();
console.log(x); // 10
