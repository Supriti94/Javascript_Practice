//creating arrays
const fruits = ['apple', 'banana', 'orange'];
const numbers = new Array(1, 2, 3, 4, 5);


//accessing array elements
console.log(fruits[0]); // Output: "apple"
console.log(numbers[2]); // Output: 3


//modifying array elements
fruits[1] = 'grape';
console.log(fruits); // Output: ["apple", "grape", "orange"]


//length property
console.log(fruits.length); // Output: 3

//modifying array elements
fruits[1] = 'grape';
console.log(fruits); // Output: ["apple", "grape", "orange"]
 

//adding elements to array
//push(): Adds one or more elements to the end of the array.
//unshift(): Adds one or more elements to the beginning of the array.
fruits.push('mango');
console.log(fruits); // Output: ["apple", "grape", "orange", "mango"]

fruits.unshift('kiwi');
console.log(fruits); // Output: ["kiwi", "apple", "grape", "orange", "mango"]

//removing elements from array
const removed1 = fruits.pop();
console.log(removed1); // Output: "mango"
console.log(fruits); // Output: ["kiwi", "apple", "grape", "orange"]

const removed2 = fruits.shift();
console.log(removed2); // Output: "kiwi"
console.log(fruits); // Output: ["apple", "grape", "orange"]

const removed3 = fruits.splice(1, 1); // Remove 1 element at index 1
console.log(removed3); // Output: ["grape"]
console.log(fruits); // Output: ["apple", "orange"]

//concat method
const allFruits = fruits.concat(['banana', 'mango']);
console.log(allFruits); // Output: ["apple", "orange", "banana", "mango"]

//slice method
const slicedFruits = allFruits.slice(1, 3);
console.log(slicedFruits); // Output: ["orange", "banana"]


//indexof
console.log(allFruits.indexOf('banana')); // Output: 2
//includes
console.log(allFruits.includes('kiwi')); // Output: false


//splice method
const num=[1,2,5,6,1,2,3,8,9];
const index=num.indexOf(3);
if(index>-1){
num.splice(7,0,4);
console.log(num);
}


//reduce method
const numarr=[1,2,3,4,5];
const sumeven=numarr.reduce((accu,item)=>
{return item%2==0  ? accu+item:accu},0);

console.log('sum of even numbers',sumeven);

const sumodd=numarr.reduce((accu,item)=>
{return item%2!=0  ? accu+item:accu},0);
console.log('sum of odd numbers',sumodd);

//for each
numarr.forEach(function(number) {
  console.log(number);
});

//for...of
for (const number of numarr) {
  console.log(number);
}

//map method

const squaredNumbers = numarr.map(function(number) {
  return number * number;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//filter method

const evenNumbers = numarr.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

const words = ['apple', 'banana', 'orange', 'kiwi', 'grapes'];

const longWords = words.filter(function(word) {
  return word.length > 5;
});

console.log(longWords); // Output: ["banana", "orange"]
