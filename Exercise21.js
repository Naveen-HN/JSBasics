var string = "Hello World";
var given_position = 4;
part1 = string.substring(0,given_position);
part2 = string.substring(given_position+1,string.length);
new_string = part1+part2;
console.log(new_string);