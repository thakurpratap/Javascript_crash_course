// 1. length method is for to check the lenght of the array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

// 2.  toString method it convert array to string

// const names = ["Banana", "Orange", "Apple", "Mango"];
const names = [1,2,3,4];
let string = names.toString();
console.log(string);

//3. The at() method returns an indexed element from an array:

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let at = fruit.at(2);
console.log(at);

//4. The join() method joins array elements into a string.

const number = [12,34,56,89]
// let join = number.join(',');
let join = number.join('2');
console.log(join);

//5. pop method remove the last element in the array
 
const a = ['pratap', 'singh', 'thakur', 'gulbarga']
let b = a.pop()
console.log(b) 

//6 . push() method add the new elements in the array at the end

const a1 = ['pratap', 'singh', 'thakur', 'gulbarga']
a1.push("karnataka")
console.log(a1) 

//7 shift() method it remove the 1st element in the array or 0 indax

const a2 = ['pratap', 'singh', 'thakur', 'gulbarga']
let shiftmethod =  a2.shift()
console.log(shiftmethod);

// 8. unshift() method it add the new element in the array at the beginning

const a3 = ['pratap', 'singh', 'thakur', 'gulbarga']
 a3.unshift('name: ')
console.log(a3);

// 9 .delete() method 


//10. concat() method create a new array by merging the existing arrays

// note : The concat() method does not change the existing arrays. It always returns a new array.
//        The concat() method can take any number of array arguments.

const arra = ['pratap', 'singh', 'thakur', 'gulbarga'];
let concatmethod = arra.concat('aaaa');
console.log(concatmethod);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)

// 11. copyWithin() method this is coppy the element in array given index   overwriting existing values.


const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let copymethod = fruitss.copyWithin(2, 0);
console.log(copymethod)

// 12. flat() method Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

const myArr = [[1,2],[3,4],[5,6]];
let newArr = myArr.flat();
console.log(newArr);

// 13. The splice() method can be used to add new items to an array:

// note : The first parameter (2) defines the position where new elements should be added (spliced in).
//        The second parameter (0) defines how many elements should be removed.

const color = ['red', "orange", "pink","blue"]
color.splice(2,0 ,"blue", "green")
console.log(color);

const colors = ['red', "orange", "pink","yellow"]
colors.splice(2,2 ,"blue", "green")
console.log(colors);

// 14. the slice() method can be used remove the items in the array

const fru= [ "Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fru.slice(3);
console.log(citrus)

//15. sort() method arrange in alphabetically 

const city = ["gulbarga", "bengalore", "hubli", "mangalore"]
let sortmethod = city.sort()
console.log(sortmethod);

// 16. revers method revers the items in the array like descending order

const citys = ["gulbarga", "bengalore", "hubli", "mangalore"];
let revers = citys.reverse()
console.log(revers);


function firstNam (name , callback) {
    console.log(name, ">>>>>pass")
    callback();
 }
 function LastNam () {
     console.log( "pass thhe test")
 }
 firstNam('thakur',LastNam);



function namesss(name, callback){
    console.log(name, ">>>>>>>>>>>>>>>>>>>>>> second");
    callback();
}
function check(){
    console.log(">>>>>>>>>>>>>>>>>>>>>> third");
}
function surname(name, callback){
    console.log(name, ">>>>>>>>>>>>>>>>>>>>>> first");
    callback(name, check)
}
surname('pratap', namesss)





function firstname(name, callback) {
    console.log(name, ">>>>>1st test pass");
    callback(name); // Call the next function (middelname)
}

function lastname() {
    console.log(">>>>>2nd test pass");
}

function middlename(name, callback) {
    console.log(name, ">>>>>>3rd test pass");
    // callback(name); // Call the next function (lastname)
}

function endname(name, callback) {
    console.log(name, ">>>>>>4th test pass");
    callback(name, middlename); // Call `firstname` with `name` and `middlename` as callback
}

// Start the sequence
endname("Pratap Singh", firstname);




// function firstname (name , callback) {
//       console.log(name , ">>>>>1st tset pass");
//       callback();
// }

// function lastname () {
// console.log(">>>>>2rd test is pass")
// }

// function middelname (name , callback){
//     console.log(name,">>>>>> 3nd tset is passed")
//     callback();

// }
// function endname (name , callback){
//     console.log(name,">>>>>> 4nd tset is passed")
//     callback(name , middelname);

// }
// endname("pratap singh" , firstname)


let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  myPromise.then((value)=>{
console.log(value)
  }).catch((error)=>{
console.log(error)
  })
  
//   myPromise.then(
//     function(value) {console.log(value);},
//     function(error) {console.log(error);}
//   );


new Promise ((resolve, reject) =>{
    var x =1;
    setTimeout(()=>{
        if(x===1){
            resolve("resolved the test") ;   
        }else{
            reject("rejected the test");
        }
    },1000)
}).then((value)=>{
console.log(value);
}).catch((error)=>{
    console.log(error)
})

// Async function to use await
async function executeTest() {
    try {
        const result = await testPromise(); // Await the promise resolution
        console.log(result); // Log the resolved value
    } catch (error) {
        console.log(error); // Handle the rejected case
    }
}
// Call the async function
executeTest();