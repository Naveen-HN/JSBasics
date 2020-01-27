function  a() {
    setTimeout(function a(params) {
        console.log("This is A in setTimeout");
    },1500);
}

function  b() {
    setTimeout(function b(params) {
        console.log("This is B in setTimeout");
    },500);
}

function  c() {
    setTimeout(function a(params) {
        console.log("This is C in setTimeout");
    },250);
}

a();
console.log("This is function A");

b();
console.log("This is function B");

c();
console.log("This in function C");
