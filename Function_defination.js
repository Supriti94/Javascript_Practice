  
  //func defination
  
  
  function myFunction(a, b) {
    return a * b;
  }
  console.log(myFunction(1,2));//calling the function

//function expression
  const x= function(a,b){return a*b};
  let z=x(4,3);
  console.log(z);

  //using function constructor
  const myFunction = new Function("a", "b", "return a * b");

  let y = myFunction(4, 3);

  //using function as value and objects

  function myFunction(a, b) {
    return a * b;
  }
  let s = myFunction(4, 3) * 2;// as value
  
  let text = myFunction.toString();//as object



  
