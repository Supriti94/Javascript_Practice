console.log('inside node',this);

function sumoftwonumbers(num1,num2){
    console.log('inside function',this);
    console.log(num1+num2);


}
sumoftwonumbers(2,3);
let sum=(num1,num2)=>{
    console.log('inside  arrow function',this);
    return num1+num2;


};
sumoftwonumbers(2,3);
sum(2,3);

let person = {
    firstName:"John",
     lastName:"Doe", 
    age:50,
     eyeColor:"blue",
    greet : function() {
        console.log('Hello, ' + this.firstName + ''+ this.lastName);
        console.log('inside object',this);
      }
      
    };
    person.greet();