const person1={
    firstname:"Rahul",
    lastname:"Dravid",
}
let fullname=function(hometown,city)
{
    console.log("fullname is:"+this. firstname+" "+ this.lastname+" from "+hometown+"city:"+city);
}
const person2={
    firstname:"Scahin",
    lastname:"Tendulkar",
}
fullname.call(person2,"delhi");
fullname.apply(person2,["delhi","jaipur"]);
let printname=fullname.bind(person2,"delhi","jaipur");
console.log(printname);
printname();