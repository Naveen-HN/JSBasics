var str1 = "Naveen";
var str2 = "Holali";
function con(a,b){
const m = Math.min(a.length,b.length);
return a.substring(a.length-m)+b.substring(b.length-m);
}
console.log(con(str1,str2));