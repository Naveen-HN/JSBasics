let myPromise = new Promise((resolve,reject) => {
    setTimeout( ()=>{
        reject("This is A");
},1500);
});

myPromise.then((accept) => {
    console.log("A has been accepted"+accept);
},(error) => {
    console.log("A has been rejected"+error);
}).finally(() => {
    console.log("This is finally block");
} )