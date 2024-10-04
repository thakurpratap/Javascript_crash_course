// Create a function to reverse a string without using higher-order functions

const reverse = "pratap singh"
let store = ""
 
for(let i = reverse.length-1; i>=0; i-- ){
    store += reverse[i]                        // in test i have add - oprater
}
console.log(store);


// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black

myColor = ["Red", "Green", "White", "Black"];
newjoin = myColor.join(",")
console.log(newjoin);
newjoin1 = myColor.join("+")
console.log(newjoin1);


// Return sum of below give array numbers= [10,20,10,40,50,60,70]

let numbers= [10,20,10,40,50,60,70].reduce((sum , a )=> sum+a,10)
console.log(numbers);

// let sun = numbers.
// console.log(sun)t

// Filter all the even number for given below array
// ["1", "2", "3", "10", "100"]

const array = ["1", "2", "3", "10", "100"]
const Filterthearray = array.map(items => Number(items)).filter(items => items%2 ==0) 
// const Filterthearray = array.filter(items => items%2 ==0);
console.log(Filterthearray);


// arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
const assending = arr1.sort();
console.log(assending)


// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
const merge = array1.concat(array2);
console.log(merge);
const duplicate = merge.filter((items,index) => merge.indexOf(items) === index)
console.log(duplicate);