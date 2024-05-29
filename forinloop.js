//iterating over object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }

 //iterating over array
 
  const numbers = [1, 2, 3, 4, 5];

for (let index in numbers) {
  console.log(index + ": " + numbers[index]);
}
