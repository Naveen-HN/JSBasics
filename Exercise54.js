var string = "NAVEEN";
var count=0;
for(var i=0;i<string.length;i++){
switch(string[i])
{
case 'A': count++;
            break;
case 'E': count++;
        break;
case 'I': count++;
        break;
case 'O': count++;
        break;
case 'U': count++;
        break;
default: break;
}
}
console.log("Number of vowels: "+count);