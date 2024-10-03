// loops

// 1. what is for loop : repeat a block of code a specified number of times. It is typically used when you know in advance how many times you want to execute a statement or block of statements.


for(let i=0; i<=10; i++){
    console.log(i)
}

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}


// 2. while loop : loop throught block of code run as lig as specifed condition is 

let texts= "";
let i = 0;
    while (i < 10) {
    texts += "The number is " + i;
    i++;
  }

  //3 do while loop : do while loop is the veriant of while loop. and this loop will execute the block of code once before checking it if condition is true repeat the block of code specifed num of times
  let tex = ""
  let i = 0;
  
  do {
    tex += "<br>The number is " + i;
    i++;
  }
  while (i < 10);


  // 4. for Each method call a function for each element an array  (the forEach() method is not execute for empty array) 
  let data = "";
  const fruits = ["apple", "orange", "cherry"];
  
  fruits.forEach(function (items) {
    data += index + ":" + items + "<br/>" ;
  })
  console.log(data, ">>>>>>>>>>>>>>>>")

// javascript arithmetic 
//   5. Division(/) 6. modulus(%) 7. Increment(++) 8.Decrement(--)

// 1. addition(+)
var a = 10;
var b = 20;
c = a+b;
console.log(c)

// 2. subtraction(-) 
var a = 10;
var b = 20;
c = a-b;
console.log(c)

// 3. multiplication(*)
var a = 10;
var b = 20;
c = a*b;
console.log(c)

// 4. exponential(**)
var a = 3;
var b = 4;
c = a**b;   // 3*3*3*3
console.log(c)  