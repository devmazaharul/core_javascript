
//Inside a Function (Non-strict mode)
function useThisInsideFun(){
    console.log(this); //referce to window object or node js global object
}
//Inside a Function (trict mode)
function useThisInsideFunstrict (){
    console.log(this); //undefine
}

/// Inside an Object Method without arrow method
const user={
  name:"Mazaharul islam",
  age:21,
  greet(){
    console.log(`Hei ${this.name} and your age is ${this.age}`);
  }
}


//Using Arrow Method
const userArrow={
  name:"Mazaharul islam",
  age:21,
  greet:()=>{
    console.log(`Hei ${this.name} and your age is ${this.age}`); //undefine --Arrow functions এর this হয় lexical (parent scope থেকে নেয়)।
  }
}


// Constructor Function use this

function Person(name){
  this.name=name
}
new Person("mazahrul").name //mazaharul

// Explicit Binding (call, apply, bind)

function explicitBinding(){
  return this.name + this.age

}

const bindingObject={
  name:"mazaharul",
  age:21
}

explicitBinding.call(bindingObject)
explicitBinding.apply(bindingObject)
const retunBindValue=explicitBinding.bind(bindingObject)


// Class Context

class PersonClass{
  constructor(name)  {
      this.name=name
  }
  printName (){
    return `Your name is ${this.name}`
  }
}

const makeIns=new PersonClass("Maza")



const objIN = {
  name: "Nipa",
  greet() {
    console.log(this.name);
  },
};

const greetFn = objIN.greet;
greetFn(); // undefined (this lost)
//Fix code 
greetFn.call(objIN)


//Event Handlers -- this code only for browser support
        // const button = document.querySelector("button");
        // button.addEventListener("click", function () {
        // return this // refers to the button
        // });