// here we are going to discuss ES6 classes

class Person{
    constructor(id){//constructor
        this.idNumber = id
    }
    slogan1(){//methods
        console.log("now a days , I am trying to become to a frontend developer");
    }
}
// inheritance of the class

class Programmer extends Person{
    constructor(id,lang){
        super(id);
        this.programmingLang = lang;
    }
    slogan(){
        console.log("My favourite language is ", this.programmingLang);
    }
}
// let amar = new Person(1051);
// console.log(amar.idNumber);
// amar.slogan();
let Chandan = new Programmer(51,"JavaScript");
Chandan.slogan();
Chandan.slogan1();02