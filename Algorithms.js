//1. To reverse a given integer 
let num = 1234;
console.log(num.toString().split('').reverse().join('')*Math.sign(num));
// To reverser an array
let arr = [1,5,7,4,2];

console.log(arr.reverse());

// To reverse the words in a string

let str = "My name is Naveen";
let str_rev = str.split(' ');
let rev = [];
for(var i=0;i<str_rev.length;i++){
 rev[i] = str_rev[i].reverse();
}