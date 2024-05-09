function outerFunction() {
    console.log(innerVar); // undefined
    var innerVar = 20;
  }
  outerFunction();
  