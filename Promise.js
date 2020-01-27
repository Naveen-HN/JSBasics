let myPromise = new Promise((resolve,reject) => {
    setTimeout(() =>{
    resolve("Success! You entered into A");
    },3000)
});

let anotherPromise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
    reject("Nope! You cannot enter B!");
    },1500)
});


myPromise.then((success) => {
    console.log("A is success "+success);
})
.catch((error) => {
    console.log("Something's not right!")
}).finally((final) => {
    console.log("Phew! Everything went well!")
});

anotherPromise.then((enter) => {
    console.log("B is success",+ enter);
})
.catch((error) => {
    console.log("No No No!! "+error);
})
.finally((final) => {
    console.log("OOPS! Couldnt enter B");
});