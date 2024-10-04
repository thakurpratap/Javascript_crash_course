// types of variable var, let , const

    // 1.var is the globale variable we can re-decleration and re-assign it many times

var name = "pratap" 
var name = "singh"
    name = "singh"


// 2.let is a block variable we can re-assign it but re-decleration is not possible 

let fullname = 'pratapsingh'
    fullname = 'pratapsingh'

// 3.const is block veriable const is the constant only once declare the value we canot re-decleration and re-assign

const lastname = "thakur"



// types of scopes (Globle scope , Function scope , block scope )


// 1. Globle scope ={globle variable means we can use the variable inside the function and outside the function we can accessible }
// Variables declared Globally (outside any function) have Global Scope. Global variables can be accessed from anywhere in a application.

   // var a = "globle_scope"
    let a = "globle_scope"
   //   const a = "globle_scope"
   const Globle = () =>{
     var a = "block_scope"
       console.log(a)
   }
   console.log(a)
   Globle();

   // 2. function scope = {veriable defined inside the function we canot accessible from outside the function}
   // Variables defined inside a function are not accessible (visible) from outside the function.

   const Functionscope = () =>{
      var b = "Functionscope"
   //  let b = 'Functionscope'
   //  const b = 'Functionscope'
    console.log(b)
   }
   // console.log(b)   //  (its not posible) reference error
   Functionscope();



   const functionScopeExample = () => {
      var b = "function scope";
      if (true) {
          var b = "still function scope";
          console.log(b);  // "still function scope"
      }
      console.log(b);  // "still function scope" (same `b` as above)
  }
  functionScopeExample();
  



   // 3. Block scope = {block scope and function scope both are similar}


   const blockScopeExample = () => {
      if (true) {
          var c = "block scope";  // let and const conot use
          console.log(c); // "block scope"
      }
      console.log(c); // ReferenceError: c is not defined (because `let` is block-scoped)
  }
  blockScopeExample();
  

   const blockscope = () =>{
      var c = 'blockscope'
   //   let c = 'blockscope'
   //   const c = 'blockscope'
     console.log(c)
   }
      // console.log(c)   //(its not posible)
      blockscope();
 


// hoisting

console.log(home, "home");
var home = "good"          


// var x;  // Declare x
// x = 5;  // Assign 
// var x = 5;  // Initialize


// Hoisting
// moving all declarations to the top of the current scope (declaration hoised to the top. but initialization is not)
//  access before declaration is call hoisting (variable can be used before it has been declared.)

x = 5; //assign 
console.log(x, "aasvvava");
var x   //declaration


// num = 6;  
// console.log(num);  //Error if let and const used
let num = 6;       // with var undefined is printed

myhoisting()
function myhoisting () {
   console.log('hoisting >>>>>>>>>>>>>>')
}

// host()
const host = () => {                  // ReferenceError: Cannot access 'host' before initialization
   console.log('asdfghjkl')
}


//  primitive/value types or Data types
//    (1. String 2.Number 3. Boolean 4. undefined 5. null)

let names = 'pratapsingh';  // string
// typeof(names)
console.log(typeof names)

let age = 25;              // number
// typeof age 
console.log(typeof age)

let isapproved = true;     // boplean
// typeof isapproved
console.log(typeof isapproved)

// let firstName = dggdg ;  // type undefined and value also undefined
let firstNames = undefined ; 
// typeof firstName
console.log(typeof firstNames)

let selectColor = null;     // null 
// typeof selectColor
console.log(typeof selectColor)


// non primitive data type / reference types
// (1. object , 2. Arrat , 3. Function)

// 1. object
let person = {
   name : "pratap",
   age: 25
}
// Dot Notation 
person.name = 'singh'

// Bracket Notation
person['name'] = 'thakur'
console.log(person.name)

// 2. Array 

 let colors = ['red', 'bule'];
 colors[2] = "orange"
 colors[3] = 1
  console.log(colors)

 let nums = [23,45,67,89,'polpo']
 console.log(nums);

//  3. function

function greet () {
   console.log('Goodmornig')
}
greet()

function greet (Nmaes , lastname) {
   console.log('Goodmornig' + Nmaes + lastname)
}
greet('pratap' , 'singh')
greet('singh')

function squae (number){
   return number*5
}
console.log(squae(6));

// let checkNull = {
//    name:"pratap"
// }
// checkNull = "";
// checkNull = null;

// if(checkNull != "" || checkNull != null){
//    checkNull = "mahi"
// }



let data = "";
const fruits = ["apple", "orange", "cherry"];

fruits.forEach(function (items) {
  data += index + ":" + items + "<br/>" ;
})
console.log(data, ">>>>>>>>>>>>>>>>")

