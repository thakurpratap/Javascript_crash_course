const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "pratap singh", email: "pssingh@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "pratap singh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))










// A promise is created using the Promise constructor, which takes a function (called the executor) with two arguments, resolve and reject.

let promise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve('resolved done')
    }else{
    reject("rejected ")
    }
});

// types of promises states
// 1. Pending Promise: A promise that is still waiting for the operation to complete.

let pendingPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 5000);  // this operation Pending for 5 seconds
});


// 2. Fulfilled Promise: A promise that has been resolved with a successful result.

let fulfilledPromise = Promise.resolve("Success!");
fulfilledPromise.then(result => console.log(result));  // Logs: Success!


// 3. Rejected Promise: A promise that has been rejected due to an error or failure in the operation.

let rejectedPromise = Promise.reject("Error occurred!");
rejectedPromise.catch(error => console.log(error));  // Logs: Error occurred!


// Methods in promise

// 1.then(): This method takes two callbacks – one for the fulfilled case and one for the rejected case. It allows you to work with the resolved value of the promise.

myPromise.then(result => {
    console.log(result);  // Handle success
}).catch(error => {
    console.log(error);  // Handle error
});


// 2.catch(): This method is used to handle any errors (rejections) that occur in the promise chain.

myPromise.catch(error => {
    console.log(error);  // Handle error
});

// .finally(): This method allows you to execute some code after the promise has been settled, regardless of its outcome (either fulfilled or rejected).

myPromise.finally(() => {
    console.log("Promise settled (fulfilled or rejected).");
});


//Types of Promise Combinations:

//1. Promise.all(): Takes an array of promises and waits for all of them to resolve. If any promise is rejected, the whole Promise.all is rejected.

Promise.all([promise1, promise2, promise3]).then(results => {
    console.log(results);  // Logs an array of results from all promises
}).catch(error => {
    console.log(error);  // Logs error if any promise fails
});

// 2. Promise.race(): Takes an array of promises and resolves or rejects as soon as the first promise in the array settles (either resolves or rejects).

Promise.race([promise1, promise2]).then(result => {
    console.log(result);  // Logs the result of the first settled promise
});


// 3. Promise.any(): Takes an array of promises and resolves as soon as any of the promises resolves successfully. It only rejects if all promises are rejected.

Promise.any([promise1, promise2]).then(result => {
    console.log(result);  // Logs the first fulfilled promise
}).catch(error => {
    console.log(error);  // Logs if all promises are rejected
});
