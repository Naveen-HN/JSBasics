var str = "JavaScript";
var allchar = str.split("");
for(var i=0;i<allchar.length;i++){
    var n = allchar[i].charCodeAt() - 'a'.charCodeAt();
    n=(n+1)%26;
    allchar[i] = String.fromCharCode(n+'a'.charCodeAt());
}
console.log(allchar.join(''));