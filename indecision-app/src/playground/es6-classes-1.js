console.log("running classes tut");

class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(`${this.name} is ${this.age} year${this.age!==1 ? "s" : ""} old.`);
    }

    greet(){
        console.log(`Hello, I'm ${this.name}.`);
    }

};

class Student extends Person {
    
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    print(){
        this.greet();
        console.log("--------==---------");
        console.log(`${this.name} is ${this.age} year${this.age!==1 ? "s" : ""} old. ${this.hasMajor()?`His major is ${this.major}.`:"He has no major."}`);
    }

};


class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }    

    greet(){
        this.hasHomeLocation() ? console.log(`Hi, my name is ${this.name}, and I am from ${this.homeLocation}.`) : super.greet();
    }

};

let me = new Student("Partha Bhattacharya", 21, "Electrical Engineering");
let who = new Person();
let vinay = new Traveller("Vinay Bagul" , 25, "Chutiyon ki galli");

console.log(me);

who.greet();
me.print();
vinay.greet();