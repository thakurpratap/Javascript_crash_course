// 1. lenght method is use for check the strig lenght

const names = "pratap singh thakur";
let size = names.length;
console.log(size);

// 2. charAt() method is return the character specified index 

const value = "pratap singh thakur";
let cha = value.charAt(1);
console.log(cha);

// 3. at() methos return the character specified index 

const values = "pratap singh thakur";
let char = values.charAt(1);
console.log(char);

//4. slice method is return the extract value new string

let text = "Apple, Banana, Kiwi , mango, banana";
let part = text.slice(7, 13);
console.log(part)

let texts = "Apple, Banana, Kiwi , mango, banana";
let parts = texts.slice(3);
console.log(parts)

let texts1 = "Apple, Banana, Kiwi , mango, banana";
let parts1 = texts1.slice(-25, -10);
console.log(parts1)

//5. substring() is similar to slice() 

let text1 = "Apple, Banana, Kiwi , mango, banana";
let part1 = text1.substring(7, 13);
console.log(part1)

let textss = "Apple, Banana, Kiwi , mango, banana";
let partss = textss.substring(3);
console.log(partss)

let texts2 = "Apple, Banana, Kiwi , mango, banana";
let parts2 = texts2.substring(-25, -10); 
console.log(parts2)

// 6. touppercase entair string convert to uppercase

const web = "pratap singh"
const sap = web.toUpperCase();
console.log(sap);

//7. toLowerCase()

const lows = "PHYGNJ Sbmdhdjdjddbj"
// const case = low.toLowerCase();
const cases = lows.toLowerCase();
console.log(cases)

//8. concat method create the new string merging with existing string

const q1 = "pratap singh";
const q = q1.concat('singh')
console.log(q);

//9. trim() method remove the 

const t = "     pratap b                n                                    "
let t2 = t.trim();
console.log(t2.length);


//10. The trimStart() method works like trim(), but removes whitespace only from the start of a string.

const t3 = "     pratap b                n                                    "
let t4 = t3.trimStart();
console.log(t4.length);

// 11. replace 

const re = "pratap singh";
const re1 = "thakur";
console.log(re1);
