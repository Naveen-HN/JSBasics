var string = "Hello";
var first = string[0];
var last = string[string.length-1];
var sec_string = string.substring(1,string.length-1);
var final = last+sec_string+first;
console.log(final);