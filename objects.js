const person={

    name:"Supriti Pradhan",
    age:30,
    city:"Bhubaneswar",
    basic:20000,
    totalsalary: function(){
        console.log(this.basic*12);
    },
    details:function(){
        console.log(this.name+" aged "+this.age+" lives in "+this.city);
    }

};
person.totalsalary();
person["lang"]="odia";
console.log(person);
let key=Object.keys(person);
for(let key in person){
    console.log(key+":"+person[key]);
}