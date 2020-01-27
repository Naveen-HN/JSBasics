function a(callback) {
    setTimeout( () => {
        console.log("This is A!");
        callback();
    },1500);
}

function b(callback) {
    setTimeout( () => {
        console.log("This is B!");
        callback();
    },3000);
}

function c(callback) {
    setTimeout( () => {
        console.log("This is C!");
        callback();
    },500);
}

a( () => {
    console.log("A is done!");
    b(  () => {console.log("B is done!!");
    c(  () => console.log("C is done!!"));
    });
});