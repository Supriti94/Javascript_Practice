const DATA="database";
class User{
 constructor(name,email){
    this.name=name;
    this.email=email;
 }

 viewdata(){
console.log( DATA);

 }
}

//let user1= new  User("Supriti","supriti@gmaail.com");

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }

    editdata(email){
        let DATA='new value';
        console.log(DATA);
    }

}
let user1= new  User("Supriti","supriti@gmaail.com");
user1.viewdata();
let admin1=new Admin("S","s.gail.com");
admin1.viewdata();
admin1.editdata();