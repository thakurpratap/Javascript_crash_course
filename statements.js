// if else statement 

var age = 20;
if(age >20){
   console.log('age is more then 20')
}else{
    console.log('age is lessthen 20')
}

const hours = new Date().getHours();

 //if else if statement
if(hours < 12){
    console.log('good morning');
} else if(hours>16){
console.log('good evening')
}else if (hours > 20){
    console.log('good night')
}


const x = 10;
const y = 20;
if(x>5 || y>10){
    console.log('one condition is true execute the code')
}

// if x>y ?then it is read color otherwise blue
// const a = 10;
const color = x > y ? 'red' : 'blue';
console.log(color)


// in switch case it check the condition is true then it execute the code and break itb mean i canot below if the condition true stop the execute
const colors = 'red'
switch (colors) {
    case 'red':
        console.log('color is red')
        break;
        case 'blue':
            console.log('color is blue')
            break;
    default:
        break;
}

const hour = new Date().getHours();
switch (hour) {
    case hour>12:
        console.log('good morning');
        break;
        case hour<16:
            console.log('good afternoon');
            break; 
            case hour<20:
                 console.log('good evening');
                 break; 
    default:
        console.log('good night');
        break;
}

// constructor function
function person(per) {
    
}