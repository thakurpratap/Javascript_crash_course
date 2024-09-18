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

   var a = "globle_scope"
   //  let a = "globle_scope"
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
    // let b = 'Functionscope'
    const b = 'Functionscope'
    console.log(b)
   }
//    console.log(b)   (its not posible)
   Functionscope();

   // 3. Block scope = {block scope and function scope both are similar}

   const blockscope = () =>{
     // let b = 'Functionscope'
     const c = 'Functionscope'
     console.log(c)
   }
   //    console.log(c)   (its not posible)
   blockscope();




